import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Card from "../components/shared/Card";
import SearchNotFound from "../components/shared/SearchNotFound";

const SearchResults = () => {

    const {data: products} = useLoaderData();
    const [searchResults, setSearchResults] = useState([]);

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query').toLowerCase();

    useEffect(() => {
        if(products && searchQuery) {
            const filteredResults = products.filter((product) => 
            product.title.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery) ||
            product.menuType.toLowerCase().includes(searchQuery)
    );
            setSearchResults(filteredResults);
            console.log(filteredResults)
        };
    }, [products, searchQuery]);

    // Cambié esta lógica por la implementación dentro del useState y el useEffect para evitar re-renderizados y mejorar optimización
    /* const filteredResults = products.filter((product) => 
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery) ||
        product.menuType.toLowerCase().includes(searchQuery)
    );
    console.log(filteredResults) */

    return(
        <div className="p-8 pt-0 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <h1 className="p-4 font-semibold text-base text-gray-300  text-center bg-[#1F1D2B] rounded-md">The results for <strong className="text-[#ec7c6a]">"{searchQuery}"</strong> are: </h1>
            
                {
                    searchResults.length > 0 ? (
                        searchResults.map((product) => (
                            <Card 
                                key={product.id}                                    
                                {...product}
                            />
                        )
                    )
                ) : (
                    <SearchNotFound text={'Sorry, there are no results matching your query today!'}/>
                )
                }
            
        </div>
    )
};

export default SearchResults;


export const loaderSearchResults = async () => {
    const res = await fetch('http://localhost:3000/products')
    if(!res.ok) {
        throw new Response ("", {
            status: 404,
            statusText:"Not found, my friend!"
        });
    }
    const data = await res.json();
  
    return { data };
};