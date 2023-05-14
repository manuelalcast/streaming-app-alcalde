import logo from "../assets/logo_2.png";
import logoUnir from "../assets/unir.png";

export default function Header() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-3">
      <div>
        <img src={logo} alt="logo" className="h-18 w-20 ml-10 " />
      </div>
      <div>
        <h1 className="text-white text-4xl mt-3 font-righteous">Puzzle</h1>
      </div>
      <div>
        <img src={logoUnir} alt="logo" className="ml-auto mr-10 h-20 w-70 " />
      </div>
    </div>
  );
}
