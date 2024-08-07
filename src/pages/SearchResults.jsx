const SearchResults = () => {
    
    return(
        'Soy el resultado de tu búsqueda'
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