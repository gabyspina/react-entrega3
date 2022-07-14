import { useContext } from 'react'
import { CartContext } from '../../components/CartContext/CartContext'

const Cart = ({productos}) => {
    const { cart, addItem } = useContext(CartContext)

    console.log('cart',cart)

    return (
    <div>
        {
            cart.map(productos => (
                <div key={productos.id}>
                    <h3>{productos.name}</h3>    
                    <p>{productos.price}</p>
                    <button onClick={() => addItem(productos)}>Add to cart</button>

                </div>
            ))
        }
    </div>
    )

}

export default Cart
