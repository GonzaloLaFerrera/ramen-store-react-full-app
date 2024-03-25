//Icons
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";


const Orders = (props) => {

    const {showOrder, setShowOrder} = props;

    return (
        <div className={`bg-[#1F1D2B] w-full h-full fixed top-0 lg:col-span-2 lg:right-0 lg:w-[450px] transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}> {/* z-50 */}
          {/* Orders */}
          <div className="relative text-gray-300 pt-16 lg:pt-4 p-8 h-full">
            <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 text-gray-300 bg-[#262837] rounded-full text-xl box-content"/>
            <h1 className="md:text-2xl text-xl mt-6 mb-8">Order #567234</h1>
            {/* Order Tabs */}
            <div className="flex items-center flex-wrap gap-2 mb-4 text-sm">
              <button className="bg-[#ec7c6a] text-white border border-gray-600 rounded-xl py-2 px-4">Dine In</button>
              <button className="bg-[#1F1D2B] text-[#ec7c6a] border border-gray-600 rounded-xl py-2 px-4">To Go</button>
              <button className="bg-[#1F1D2B] text-[#ec7c6a] border border-gray-600 rounded-xl py-2 px-4">Delivery</button>
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
                <div className="bg-[#262837] p-4 mb-2 rounded-xl text-xs md:text-sm md:mr-8 lg:mr-2">
                  <div className="grid grid-cols-6 md:gap-12 lg:gap-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img src="/img/Ramen3-noBg.png" alt="ramen1" className="w-10 h-10 object-cover"/>
                      <div>
                        <h5 className="md:text-sm text-xs">Hida Takayama ramen</h5>
                        <span className="text-xs text-gray-500">$3.49-.</span>
                      </div>
                    </div>
                    {/* Qty*/}
                    <div className="col-span-1 pl-2"> {/* OJO que agregue un padding left para centrar */}
                      <span className="bg-[#1F1D2B] py-1 px-3 rounded-lg ">2</span>
                    </div>
                    {/* Price*/}
                    <div className="col-span-1">
                      <span className="md:text-sm text-xs">$6.98-.</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-1 md:gap-12 lg:gap-6">
                    <form action="" className="col-span-5">
                      <input type="text" placeholder="Order Note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg w-full outline-none " />
                    </form>
                    <div className="col-span-1 text-center text-lg pr-4 md:mr-16 lg:mr-0"> {/* OJO agregue un mr para centar el icono */}
                      <button className="border border-red-400 p-2 rounded-lg text-xs md:text-sm">
                        <RiDeleteBin6Line className="text-red-400"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="bg-[#262837] p-4 mb-2 rounded-xl text-xs md:text-sm md:mr-8 lg:mr-2">{/* OJO agregue un mr para alinear elementos/boxes */}
                  <div className="grid grid-cols-6 md:gap-12 lg:gap-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img src="/img/Ramen1-noBg.png" alt="ramen1" className="w-10 h-10 object-cover"/>
                      <div>
                        <h5 className="md:text-sm text-xs">Tokushima ramen</h5>
                        <span className="text-xs text-gray-500">$2.29-.</span>
                      </div>
                    </div>
                    {/* Qty*/}
                    <div className="col-span-1 pl-2"> {/* OJO que agregue un padding left para centrar */}
                      <span className="bg-[#1F1D2B] py-1 px-3 rounded-lg ">2</span>
                    </div>
                    {/* Price*/}
                    <div className="col-span-1">
                      <span className="md:text-sm text-xs">$4.58-.</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-1 md:gap-12 lg:gap-6">
                    <form action="" className="col-span-5">
                      <input type="text" placeholder="Order Note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg w-full outline-none " />
                    </form>
                    <div className="col-span-1 text-center text-lg pr-4 md:mr-16 lg:mr-0">
                      <button className="border border-red-400 p-2 rounded-lg text-xs md:text-sm">
                        <RiDeleteBin6Line className="text-red-400"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="bg-[#262837] p-4 mb-2 rounded-xl text-xs md:text-sm md:mr-8 lg:mr-2">
                  <div className="grid grid-cols-6 md:gap-12 lg:gap-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img src="/img/Ramen6-noBg.png" alt="ramen1" className="w-10 h-10 object-cover"/>
                      <div>
                        <h5 className="md:text-sm text-xs">Golden Shrimp ramen</h5>
                        <span className="text-xs text-gray-500">$3.59-.</span>
                      </div>
                    </div>
                    {/* Qty*/}
                    <div className="col-span-1 pl-2"> {/* OJO que agregue un padding left para centrar */}
                      <span className="bg-[#1F1D2B] py-1 px-3 rounded-lg ">1</span>
                    </div>
                    {/* Price*/}
                    <div className="col-span-1">
                      <span className="md:text-sm text-xs">$3.59-.</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-1 md:gap-12 lg:gap-6">
                    <form action="" className="col-span-5">
                      <input type="text" placeholder="Order Note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg w-full outline-none " />
                    </form>
                    <div className="col-span-1 text-center text-lg pr-4 md:mr-16 lg:mr-0">
                      <button className="border border-red-400 p-2 rounded-lg text-xs md:text-sm">
                        <RiDeleteBin6Line className="text-red-400"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="bg-[#262837] p-4 mb-2 rounded-xl text-xs md:text-sm md:mr-8 lg:mr-2">
                  <div className="grid grid-cols-6 md:gap-12 lg:gap-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img src="/img/Ramen9-noBg.png" alt="ramen1" className="w-10 h-10 object-cover"/>
                      <div>
                        <h5 className="md:text-sm text-xs">Tori-Paitan ramen...</h5>
                        <span className="text-xs text-gray-500">$1.99-.</span>
                      </div>
                    </div>
                    {/* Qty*/}
                    <div className="col-span-1 pl-2"> {/* OJO que agregue un padding left para centrar */}
                      <span className="bg-[#1F1D2B] py-1 px-3 rounded-lg ">2</span>
                    </div>
                    {/* Price*/}
                    <div className="col-span-1">
                      <span className="md:text-sm text-xs">$3.98-.</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-1 md:gap-12 lg:gap-6">
                    <form action="" className="col-span-5">
                      <input type="text" placeholder="Order Note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg w-full outline-none " />
                    </form>
                    <div className="col-span-1 text-center text-lg pr-4 md:mr-16 lg:mr-0">
                      <button className="border border-red-400 p-2 rounded-lg text-xs md:text-sm">
                        <RiDeleteBin6Line className="text-red-400"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="bg-[#262837] p-4 mb-2 rounded-xl text-xs md:text-sm md:mr-8 lg:mr-2">
                  <div className="grid grid-cols-6 md:gap-12 lg:gap-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img src="/img/Ramen8-noBg.png" alt="ramen1" className="w-10 h-10 object-cover"/>
                      <div>
                        <h5 className="md:text-sm text-xs">Osaka style ramen</h5>
                        <span className="text-xs text-gray-500">$3.00-.</span>
                      </div>
                    </div>
                    {/* Qty*/}
                    <div className="col-span-1 pl-2"> {/* OJO que agregue un padding left para centrar */}
                      <span className="bg-[#1F1D2B] py-1 px-3 rounded-lg ">1</span>
                    </div>
                    {/* Price*/}
                    <div className="col-span-1">
                      <span className="md:text-sm text-xs">$3.00-.</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-1 md:gap-12 lg:gap-6">
                    <form action="" className="col-span-5">
                      <input type="text" placeholder="Order Note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg w-full outline-none " />
                    </form>
                    <div className="col-span-1 text-center text-lg pr-4 md:mr-16 lg:mr-0">
                      <button className="border border-red-400 p-2 rounded-lg text-xs md:text-sm">
                        <RiDeleteBin6Line className="text-red-400"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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