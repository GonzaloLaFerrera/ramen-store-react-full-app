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
import AdminLogin from "../pages/AdminLogin";
import LayoutPrivate from "../layouts/LayoutPrivate";
import Contact from "../pages/Contact";
import Announcements from "../pages/Announcements";
import Stores from "../pages/Stores";
import Recipes from "../pages/Recipes";
import RecipeDetail1 from "../pages/RecipeDetail1";
import RecipeDetail2 from "../pages/RecipeDetail2";


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
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/announcements',
                element:<Announcements />
            },
            {
                path:'/stores',
                element:<Stores />
            },
            {
                path:'/recipes',
                element:<Recipes />,
                /* children:[ ----> NO ESTÁ FUNCIONANDO EL RENDERIZADO ANIDADO!
                    {
                        path:'/recipes/recipeDetail1',
                        element:<RecipeDetail1 />
                    },
                    {
                        path:'/recipes/recipeDetail2',
                        element:<RecipeDetail2 />
                    },
                ]   */ 
            //    SI LOS AGREGO COMO RUTAS INDEPENDIENTES SI FUNCIONA!
            },
            {
                path:'/recipeDetail1',
                element:<RecipeDetail1 />
            },
            {
                path:'/recipeDetail2',
                element:<RecipeDetail2 />
            },          
        ]
    },
    {
        path:'/adminLayout',
        element:<LayoutPrivate />,
        children:[
            {
                path:'/adminLayout/adminLogin',
                element:<AdminLogin />,
            }
        ]
    }
]);