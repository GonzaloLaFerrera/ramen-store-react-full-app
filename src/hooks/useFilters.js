import { useContext } from "react";
import { FiltersContext } from "../context/filterContext";

export default function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext);

    //tengo que re-ver esta funcion de filtrado (quizas deba separar categorias y menuType's en 2 func dist)
    const filterProducts = (products) => {
        return products.filter(product => {
            return(              
                filters.menuType === 'all' ||
                product.menuType === filters.menuType 
            )
        })
    };

    return { filterProducts, filters, setFilters }
};



/* const filterProducts = (products) => {
    return products.filter(product => {
        return(
            product.category === filters.category &&
            (filters.menuType === 'all' ||
            product.menuType === filters.menuType)
        )
    })
}; */