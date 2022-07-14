import {useState} from 'react';
import "./ItemCount.css";
import {Button}  from '@mui/material';


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0);


    const handleCounterUp = () => {

        if (count < stock) {
            setCount(count + 1);
                return "count";

        }else{
            alert("No se puede comprar mas de 5 unidades");
        }
    }

    const handleCounterDown = () => {

        if (count > initial) {
            setCount(count - 1);         
                return "count";
            
    }   else{
            alert   ("No se puede comprar menos de 0 unidades");
    }
}

        return (
<div className="item-count">
    <div className='counter-section'>
        <div className='counter'>

            <button onClick={handleCounterDown}>-</button>  
                <p>{count}</p>
            <button onClick={handleCounterUp}>+</button>
            
            
        </div>
        <div className='btn'>

                <Button variant='contained'>Add Cart</Button>

        </div>
    </div>
</div>
        )
    }


    export default ItemCount;

