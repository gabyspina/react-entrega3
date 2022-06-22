import Item from "../Item/Item"
const ItemList = ({productos}) => {

  console.log('prod', productos)

  return (
    <div>
          {productos.map((item) => (
      <Item key={item.id} productos={item} />
    ))} 
    </div>
  )
}

export default ItemList
