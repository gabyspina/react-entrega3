import Item from "../Item/Item"
import './ItemList.css'
import { Link } from 'react-router-dom';

const ItemList = ({data}) => {

  return (
    <div className="items">
          {data.map((item) =>{
            return (
              <div key={item.id}> 
                <Link className="name" to={`/detail/${item.id}`}>

                        <Item  data={item} />  
                </Link>
              
              </div>
                  )})} 
    </div>
  )
}

export default ItemList
