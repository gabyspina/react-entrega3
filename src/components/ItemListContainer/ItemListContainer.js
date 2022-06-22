import {useState, useEffect} from 'react'
import './ItemListContainer.css'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
      fetch('https://dog-food-25e01-default-rtdb.firebaseio.com/alimentos.json')
      .then((response) => response.json())
      .then((json) => setItems(json))
          }, [])


  return (
    <div className='contenedor'> {

      <ItemList productos={items}/>
}
    </div>
  );
}

export default ItemListContainer
