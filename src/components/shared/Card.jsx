const Card = (props) => {

    const { img, title, price, qty } = props;

    return (
        <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
              <img src={img} alt="ramen1" className="w-40 h-40 object-cover -mt-20 rounded-full shadow-xl"/>
              <p className="text-xl">{title}</p>
              <span className="text-gray-400">${price}-.</span>
              <span className="text-gray-500">{qty} Bowls available</span>
            </div>
    )
};

export default Card;