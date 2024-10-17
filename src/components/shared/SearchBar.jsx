import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);    
    };

    const handleKeyDown = (e) => {
        if(e.key ==='Enter') {
            const searchTerms = search.trim();
            if(searchTerms) {
                console.log('El término de búsqueda es: ' + searchTerms);
                navigate(`/searchResults?query=${searchTerms}`);
            } else {
                console.log('No se ha ingresado el termino de búsqueda!');
            }
        };
    };

    /* const handleKeyDown = (e) => {
        console.log('El término de búsqueda es: ' + search);
        navigate(`/searchResultsTester?query=${search}`);
    } */

    console.log(search);

    return (
        <div className="w-full relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300"/>
            <input 
                type="text" 
                placeholder="Search" 
                className="bg-[#1F1D2B] rounded-lg outline-none text-gray-300 py-2 w-full pl-8 pr-4"
                value={search}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}                
            />
        </div>
    )
};

export default SearchBar;