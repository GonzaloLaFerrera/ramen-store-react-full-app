import { createBrowserRouter } from "react-router-dom";
import { products } from '../mocks/products.json';
import App from "../App";
import ColdDishes, { loaderColdDishes } from "../pages/ColdDishes";
import Grill, { loaderGrill } from "../pages/Grill";
import HotDishes, { loaderHotDishes } from "../pages/HotDishes";
import Desserts, { loaderDesserts } from "../pages/Desserts";
import ProductDetail, { loaderProductDetail } from "../components/shared/ProductDetail";
import NotFound from "../pages/NotFound";
import SearchResults, { loaderSearchResults } from "../pages/SearchResults";


console.log(products);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement:<NotFound />,
        children:[
            {
                index: true,
                element: <HotDishes />,
                loader: loaderHotDishes,
            },
            {
                path:'/coldDishes',
                element: <ColdDishes />, 
                loader: loaderColdDishes
            },
            {
                path:'/grill',
                element: <Grill />,
                loader: loaderGrill
                
            },
            {
                path:'/desserts',
                element: <Desserts />, 
                loader: loaderDesserts
            },
            {
                path:'productDetail/:id',
                element:<ProductDetail />,
                loader: loaderProductDetail
            },
            {
                path:'/searchResults/:search', //agregue params dinámicos
                element:<SearchResults />,
                loader: loaderSearchResults
            }
        ]
    }
]);