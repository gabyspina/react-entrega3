import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const insInCart  = (id) => {
        return cart.some(item => item.id === id)

    }

    const addItem = ( item, count) => {
        if(insInCart(item.id)) {
            setCart(cart.map(item => {
                if(item.id === item.id) {
                    item.count += count
                }
                return item
            }))
        }
        
        setCart([...cart, {...cart, qty: count}])
        console.log(cart);
    
    }

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}


