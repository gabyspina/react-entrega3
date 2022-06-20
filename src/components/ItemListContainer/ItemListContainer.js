import {useState, useEffect} from 'react'

import CardComponents from '../CardComponents/CardComponents'

const ItemListContainer = () => {

    const [items, setItems] = useState([])

      console.log('Infor:',items)

    useEffect(() => {
      fetch('https://dog-food-25e01-default-rtdb.firebaseio.com/alimentos.json')
      .then((response) => response.json())
      .then((json) => setItems(json))
          }, [])


  return (
    <div>

      <h3> Alimentos </h3>
      
    {items.map((item) => (
      <CardComponents key={item.id} info={item} />
    ))}

    </div>
  );
}

export default ItemListContainer
