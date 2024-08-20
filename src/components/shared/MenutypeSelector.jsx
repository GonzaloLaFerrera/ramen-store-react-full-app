import { useId } from "react";
import useFilters from "../../hooks/useFilters";


export default function MenuTypeSelector () {
    const { filters, setFilters } = useFilters();
    
    const menuTypeFilter = useId();

    const handleChangeMenuTypeSelector = (event) => {
        setFilters(prevState => ({
            ...prevState,
            menuType: event.target.value
        }))   
    };

    console.log(filters);

    return(
        <section className="flex flex-col gap-2 items-end md:items-baseline lg:items-baseline  lg:gap-4 md:gap-4 md:flex-row lg:flex-row">
            <label htmlFor={menuTypeFilter} className="text-gray-400 text-base md:text-sm lg:text-sm">Menu Type</label>
            <select 
                id={menuTypeFilter} 
                className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg"
                onChange={handleChangeMenuTypeSelector}
            >
                <option value="all">All</option>
                <option value="veggie">Veggie</option>
                <option value="with wheat">With Wheat</option>
                <option value="dairy">Dairy</option>
                <option value="sour">Sour</option>
            </select>
        </section>
    )
};