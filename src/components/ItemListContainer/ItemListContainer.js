import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import axios from 'axios'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
      axios('https://alimentos-fef35-default-rtdb.firebaseio.com/alimentos.json')
      .then((res)=> setItems(res.data))
      
          }, [])


  return (
    <div className='contenedor'> {

      <ItemList productos={items}/>
}
    </div>
  );
}

export default ItemListContainer

