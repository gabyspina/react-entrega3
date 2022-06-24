import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({productos}) => {

  console.log('prod', productos)

  return (
    <div className="items">
          {productos.map((item) =>{
            return (
              <div key={item.id}> 

                  <Item key={item.id} productos={item} />
                
              </div>
                  )})} 
    </div>
  )
}

export default ItemList
