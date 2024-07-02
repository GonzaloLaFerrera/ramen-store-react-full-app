import { createBrowserRouter } from "react-router-dom";
import { products } from '../mocks/products.json'
import App from "../App";
import ColdDishes from "../pages/ColdDishes";
import Grill from "../pages/Grill";
import HotDishes from "../pages/HotDishes";
import Desserts from "../pages/Desserts";
import useFilters from "../hooks/useFilters";


console.log(products)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index: true,
                element: <HotDishes />
            },
            {
                path:'/coldDishes',
                element: <ColdDishes products={products}/> 
            },
            {
                path:'/grill',
                element: <Grill />
            },
            {
                path:'/desserts',
                element: <Desserts products={products}/> 
            },
        ]
    }
]);
