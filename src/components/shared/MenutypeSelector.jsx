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
        <section className="flex items-baseline gap-4">
            <label htmlFor={menuTypeFilter} className="text-gray-400 text-sm">Menu Type</label>
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