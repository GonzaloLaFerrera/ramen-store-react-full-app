import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Card2 = (product) => {

    const { title, price, stock, category, thumbnail, id } = product; //ojo porque elimine el id (no se usaba)

/*     const params = useParams();
    const id = params.id;

    console.log(id) */
    console.log(id)

    return (
        <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
              <Link to={`/productDetail/${id}`}>
                <img src={thumbnail} alt="ramen1" className="w-40 h-40 object-cover -mt-20 rounded-full shadow-xl"/>
              </Link>
              <p className="text-xl">{title}</p>
              <span className="text-gray-400">${price}-.</span>
              <span className="text-gray-500">{stock} Orders available</span>
              <button className="text-white p-2 rounded-md hover:bg-[#ec7c6a] transition-all"><RiShoppingCart2Line className="text-xl"/></button>
        </div>
    )
};

export default Card2;


/* const Card2 = (product) => {

    const { id, title, price, stock, category, thumbnail } = product;

    return (
        <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
              <img src={thumbnail} alt="ramen1" className="w-40 h-40 object-cover -mt-20 rounded-full shadow-xl"/>
              <p className="text-xl">{title}</p>
              <span className="text-gray-400">${price}-.</span>
              <span className="text-gray-500">{stock} Orders available</span>
            </div>
    )
};

export default Card2; */