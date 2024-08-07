import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productCartInIndex = cart.findIndex(item => item.id === product.id);

        if(productCartInIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productCartInIndex].quantity += 1
            return setCart(newCart)
        };

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    };

    const clearCart = () => {
        setCart([]);
    };

    //Remove from cart method
/*     const removeFromCart = (product) => {
        const selectedProduct = cart.filter(item => item.id === product.id);
        setCart(prevState => ([
            ...prevState
        ])) 
    };

    const removeFromCart2 = (product) => {
        const productCartInIndex = cart.findIndex(item => item.id === product.id);

        if(productCartInIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productCartInIndex].quantity += 1
            return setCart(newCart)
        };

        setCart(prevState => ([
            ...prevState
        ])) 
    } */


    return (
        <CartContext.Provider
            value={{ cart, addToCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    )
};
