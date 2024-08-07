//Version sin TS
import { useEffect, useState } from "react";

// parametros que pasamos son el value (valor o data del user en la searchBar) y el delay(tiempo de espera)
export const useDebounce = (value, delay) => {
    // usamos un estado local para guardar la info ingresada por el usuario
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        //Actualizamos el valor 'debounced' después de un tiempo
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        //El tiempo se reinicia cada vez que el valor cambia
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    //Se devuelve el valor 'debounced'
    return debounceValue;
};