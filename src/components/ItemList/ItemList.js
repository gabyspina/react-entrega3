import Item from "../Item/Item"
import './ItemList.css'
import { Link } from 'react-router-dom';

const ItemList = ({productos}) => {

  console.log('prod', productos)

  return (
    <div className="items">
          {productos.map((item) =>{
            return (
              <div key={item.id}> 
                <Link className="name" to={`/detail/${item.id}`}>
               
                        <Item  productos={item} />  
                </Link>
               
              </div>
                  )})} 
    </div>
  )
}

export default ItemList
