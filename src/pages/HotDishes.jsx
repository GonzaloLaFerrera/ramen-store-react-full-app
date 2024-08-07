import { useLoaderData } from "react-router-dom";
import Card from "../components/shared/Card";
import useFilters from "../hooks/useFilters";
import ProductsNotFound from "../components/shared/ProductsNotFound";


const HotDishes = () => {
    const { data: products } = useLoaderData();
    // const { category } = products; NO SE UTILIZA MÁS!

    const hotDishesProducts = products.filter(product => product.category === 'hot-dishes');
    const { filterProducts } = useFilters();
        
    const hotDishesFilteredProducts = filterProducts(hotDishesProducts);

    console.log(hotDishesFilteredProducts);

    return(
        <>
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {
                    hotDishesFilteredProducts.length > 0 ? (
                        hotDishesFilteredProducts.map(product => 
                            (
                                <Card 
                                    key={product.id}                                    
                                    {...product}
                                />
                            )
                        )
                    ) : (
                        <ProductsNotFound />
                    )
                }
            </div>
        </>
    )
};

export default HotDishes;

export const loaderHotDishes = async () => {
    const res = await fetch('http://localhost:3000/products');
    if(!res.ok) {
        throw new Response ("", {
            status: 404,
            statusText:"Not found, my friend!"
        });
    }
    const data = await res.json();

    return {data};
};