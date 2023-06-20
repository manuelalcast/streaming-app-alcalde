import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/streaming.css";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Confetti(props) {
  let navigate = useNavigate();
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => {
    fire();

    function fetchCreateRent() {


      const current = new Date();
      let monthInicio = current.getMonth()+1;
      monthInicio = ( monthInicio.toString().length === 1 ? ('0'+monthInicio) : monthInicio )
      const dateToday = `${current.getFullYear()}/${monthInicio}/${current.getDate()}`;
      var fecha = new Date();
      fecha.setDate(fecha.getDate() + props.dias);
      let monthFin = fecha.getMonth()+1;
      monthFin = ( monthFin.toString().length === 1 ? ('0'+monthFin) : monthFin )
      const dateEnd = `${fecha.getFullYear()}/${monthFin}/${fecha.getDate()}`;

      fetch(process.env.REACT_APP_OPERADOR_URL + "/rentals" , {
        method: 'POST',
        body: JSON.stringify({
          "user_id" : 1, // usuario 1 siempre por uso de "sesion activa"
          "rented_at" : dateToday,
          "rented_to" : dateEnd,
          "total" : (process.env.REACT_APP_PRECIO_PELICULA_X_DIA * props.dias )
        }
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
          fetchCreateRentDetail(data.data);
            // Handle data
         })
         .catch((err) => {
            console.log(err.message);
         });
      
    }

    function fetchCreateRentDetail(objRent) {
      console.log(objRent);
      fetch(process.env.REACT_APP_OPERADOR_URL + "/rentals/"+objRent.id+"/movies", {
        method: 'POST',
        body: JSON.stringify({
          "movie_id": props.id
        }        
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Credentials' : 'true'
        },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }

    fetchCreateRent();

  });

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <div>
      <ReactCanvasConfetti refConfetti={getInstance} className="confetti" />
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <h1 className="text-2xl font-title">Película alquilada por {props.dias} día{props.dias===1?'':'s'}</h1>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
            </div>
            <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate("/")}
              >
                Culminar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
