import { useLoaderData, useNavigate } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { useCart } from '../../hooks/useCart';


const ProductDetail = () => {

    const { productDetailedData } = useLoaderData();
    const { thumbnail, title, price, stock, description, id } = productDetailedData;
    console.log(productDetailedData)

    //consumo de contexto
    const { addToCart } = useCart();

    //navegación
    const navigate = useNavigate();

    return(
        <>
        <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex gap-2">
              <img src={thumbnail} alt="Hiyayakko" className="w-60 h-60 object-cover -mt-20 rounded-full shadow-xl"/>
              <div className="flex flex-col gap-2">
                <p className="text-2xl">{title}</p>
                <p className="text-gray-400 text-base">{description}</p>
                <div className="flex gap-2">
                    <span className="text-gray-400">${price}-.</span>
                    <span className="text-gray-500">{stock} Orders available</span>
                    <button 
                        className="text-white p-2 rounded-md hover:bg-[#ec7c6a] transition-all"
                        onClick={() => addToCart(productDetailedData)}
                    >
                        <RiShoppingCart2Line className="text-xl"/>
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                    >Go Back</button>
                </div>
              </div>
        </div>
        </>
    )
};

export default ProductDetail;

export const loaderProductDetail = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/products/${params.id}`);
    if(!res.ok) {
        throw new Response ("", {
            status: 404,
            statusText:"Not found, my friend!"
        });
    }
    const productDetailedData = await res.json();

    return {productDetailedData};
};