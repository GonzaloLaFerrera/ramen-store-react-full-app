import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const SearchBar = () => {
    const [ search, setSearch ] = useState("");
    const [ productos, setProductos ] = useState([])
    const debouncedValue = useDebounce(search, 1000);

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    /* const peticionGet = async () => {
        const res = await fetch('http://localhost:3000/products');
        if(!res.ok) {
            throw new Response ("", {
                status: 404,
                statusText:"Cannot fulfill the promise, my friend!"
            });
        }
        const productos = await res.json();
        return {productos};
    }; */

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:3000/products');
            if(!res.ok) {
                throw new Response ("", {
                    status: 404,
                    statusText:"Cannot fulfill the promise, my friend!"
                });
            }
            const data = await res.json();
            // console.log(data);
            setProductos(data);
            // creo que acá debe ir el setSearchParams
            //console.log(debouncedValue)
            setSearchParams(debouncedValue)
            // return {data};
        };
        search ? getData() : setProductos([]);
        // console.log([debouncedValue])
        
    }, [debouncedValue]); //acá agregue como dependencia 'search' porque sino no renderizaba o actualizaba correctamente el estado
                  //pero de esta forma realiza un fetch cada vez que escribo algo en el input
                  //cambio dep 'search' por 'debounceValue'
    console.log(debouncedValue)

    console.log(productos);

    

    // Estoy recibiendo error de Loopeo Infinito al ejecutar esta function. Quiza deberia estar todo dentro del useEffect anterior. O habría que revisar por que esta re-renderizandose tantas veces
    /* const filteredSearch = (searchTerms) => {
        const searchResults = productos.filter((element) => {
            if(
                element.title.toString().toLowerCase().includes(searchTerms.toLowerCase()) || 
                element.menuType.toString().toLowerCase().includes(searchTerms.toLowerCase()) ||
                element.category.toString().toLowerCase().includes(searchTerms.toLowerCase())
            )
                {
                    return element;
                }
        });
        setProductos(searchResults);
    }; 

     if(debouncedValue.length > 0){
        filteredSearch(debouncedValue);
        console.log(productos);
    }; */

    //Función de filtrado por titulo, menuType y categoria
    /* const filteredSearch = (searchTerms) => {
        const searchResults = productos.filter((element) => {
            if(
                element.title.toString().toLowerCase().includes(searchTerms.toLowerCase()) || 
                element.menuType.toString().toLowerCase().includes(searchTerms.toLowerCase()) ||
                element.category.toString().toLowerCase().includes(searchTerms.toLowerCase())
            )
                {
                    return element;
                }
        });
        setProductos(searchResults);
    }; */

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        //filteredSearch(e.target.value);
    };

    // console.log(search)


    return (
        <div className="w-full relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300"/>
            <input 
                id="searchQuery"
                type="text" 
                placeholder="Search" 
                className="bg-[#1F1D2B] rounded-lg outline-none text-gray-300 py-2 w-full pl-8 pr-4"
                value={search}
                onChange={handleSearch}
                /* onKeyDown={(e) => {if(e.key === "Enter" ){
                    console.log('estoy apretando el Enter')
                    navigate(`/searchResults/${search}`) //quiero que dirija al usuario a esa url dinamica
                }} } */
            />
        </div>
    )
}

export default SearchBar;


/* const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
};

console.log(search);

const handleSubmitSearch = (search) => {
    navigate(`/searchResults/${search}`)
    console.log(search);
} */