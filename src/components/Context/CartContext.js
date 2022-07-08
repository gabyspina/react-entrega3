import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({});
    
    let { id } = useParams();
    
    useEffect(() => {
        axios(`https://alimentos-fef35-default-rtdb.firebaseio.com/alimentos.json`)
        .then((res) => setCart(res.data.find(unItem => unItem.id == id)))
    }, [id]);
 
    console.log('id', id);

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const addToCart = (id, item, qty) => {
            setCart([...cart, {...id, item, qty}]);

    }

    return (
        <CartContext.Provider value={[cart, addToCart]}>
        {children}
        </CartContext.Provider>
    );

}