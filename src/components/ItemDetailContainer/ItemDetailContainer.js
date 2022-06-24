import {useState, useEffect} from 'react'


import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
      fetch('https://dog-food-25e01-default-rtdb.firebaseio.com/alimentos.json')
      .then((response) => response.json())
      .then((json) => setItems(json))
          }, [])


  return (
    <div className='contenedor'> {

      <ItemDetail productos={items}/>
}
    </div>
  );
}

export default ItemDetailContainer
