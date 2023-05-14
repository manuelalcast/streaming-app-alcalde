import { useState } from "react";

const useCounterDays = () => {
    const [days , setCounterDays] = useState(1);

    /** Por "requerimiento" no se puede solicitar más de 5 días de alquiler **/

    const plusDays = () => setCounterDays((days === 5 ? 5 : days + 1));
    const lessDays = () => setCounterDays((days === 1 ? 1 : days - 1));

    return {
        days, plusDays, lessDays
    }
}

export default useCounterDays;