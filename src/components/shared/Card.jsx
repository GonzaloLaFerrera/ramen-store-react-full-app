import { RiDeleteBin6Line, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {useCart} from '../../hooks/useCart';

const Card = (product) => {

    //destructuración de props
    const { thumbnail: img, title, price, stock: qty, id } = product;
    console.log(product)

    //consumo del contexto y sus métodos
    const { cart, addToCart } = useCart();

    //función para chequeo de existencia de articulo en el carrito
    const isProductInCart = product => {
      return cart.some(item => item.id === product.id)
    };

    return (
        <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
              <Link to={`/productDetail/${id}`}>
                <img src={img} alt="ramen1" className="w-40 h-40 object-cover -mt-20 rounded-full shadow-xl"/>
              </Link>
              <p className="text-xl">{title}</p>
              <span className="text-gray-400">${price}-.</span>
              <span className="text-gray-500">{qty} Orders available</span>
              <button 
                className="text-white p-2 rounded-md hover:bg-[#ec7c6a] transition-all"
                onClick={() => addToCart(product)}
              >
                {
                  isProductInCart 
                  ? <RiShoppingCart2Line className="text-xl"/>
                  : <RiDeleteBin6Line className="text-xl"/> //No esta funcionando
                }
                
              </button>
            </div>
    )
};

export default Card;