import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        menuType: 'all', //with meat, spicey, with fish, veggie, sweetie
        //priceRange [más barato, más caro]
    });

    return (
        <FiltersContext.Provider
            value={{filters, setFilters}}
        >
            {children}
        </FiltersContext.Provider>
    )
};