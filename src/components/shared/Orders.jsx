//Icons
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

//Components
import OrderItem from "./OrderItem";
import EmptyCart from "./EmptyCart";

//Hooks
import { useCart } from "../../hooks/useCart";


const Orders = (props) => {

    //estado local de manejo de switch del menu de order's
    const {showOrder, setShowOrder} = props;

    //consumo del contexto y sus métodos
    const { cart, addToCart, clearCart } = useCart();


    return (
        <div className={`bg-[#1F1D2B] w-full h-full fixed top-0 lg:col-span-2 lg:right-0 lg:w-[450px] transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}> {/* z-50 */}
          {/* Orders */}
          <div className="relative text-gray-300 pt-16 lg:pt-4 p-8 h-full">
            <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 text-gray-300 bg-[#262837] rounded-full text-xl box-content hover:bg-[#ec7c6a] transition-all"/>
            <div className="flex justify-between items-center">
              <h1 className="md:text-2xl text-xl mt-6 mb-8">Order #567234</h1> {/* acá debería ir un #UUID  */}
              <button 
                className="bg-[#1F1D2B] text-[#ec7c6a] border border-gray-600 rounded-2xl text-xl p-4 my-8 ml-6 hover:bg-[#ec7c6a] hover:text-white transition-all"
                onClick={clearCart}
              >
                <MdOutlineRemoveShoppingCart />
              </button>
            </div>
            {/* Order Tabs */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center flex-wrap gap-2  text-sm">
                <button className="bg-[#ec7c6a] text-white border border-gray-600 rounded-xl py-2 px-4">Dine In</button>
                <button className="bg-[#1F1D2B] text-[#ec7c6a] border border-gray-600 rounded-xl py-2 px-4">To Go</button>
                <button className="bg-[#1F1D2B] text-[#ec7c6a] border border-gray-600 rounded-xl py-2 px-4">Delivery</button>
              </div>
              {/* estaba el boton de cleanCart */}
            </div>
            {/* Cart */}
            <div>
              <div className="grid grid-cols-6 p-4 text-sm md:text-base">
                <h5 className="col-span-4">Order</h5>
                <h5 className="col-span-1 pl-3">Qty</h5>
                <h5 className="col-span-1">Price</h5>
              </div>
              {/* Product List */}
              <div className="h-[400px] md:h-[700px] lg:h-[450px] overflow-scroll overflow-x-hidden">
                {/* Product*/}
                {
                  cart.length > 0 ? (
                    cart.map(product => (
                      <OrderItem 
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product}
                      />
                    )) 
                  ) : (
                    <EmptyCart />
                  )
                } 
              </div>
            </div>
            {/* Payment Footer */}
            <div className="bg-[#262837] absolute bottom-0 left-0 p-8 w-full text-sm md:w-[90%] md:rounded-md md:mx-5 md:mb-4"> {/*(fixed faltaria?) arreglado el media query para desktop del payment */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Discount</span>
                <span className="font-medium">$0-.</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-medium">$4.58-.</span>
              </div>
              <button className="bg-[#ec7c6a] rounded-md p-2 w-full font-medium text-white">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
    )
};

export default Orders;