import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({productos}) => {

  console.log('prod', productos)

  return (
    <div className="items">
          {productos.map((item) => (
      <Item key={item.id} productos={item} />
    ))} 
    </div>
  )
}

export default ItemList
