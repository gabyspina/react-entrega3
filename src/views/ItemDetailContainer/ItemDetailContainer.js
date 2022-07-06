import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ItemDetailContainer = () => {
  const [alimento, setAlimento] = useState({});

 
  let {id} = useParams();

  console.log('id', id)


  useEffect(() => {
    axios(`https://alimentos-fef35-default-rtdb.firebaseio.com/alimentos.json`)
    .then((res) => setAlimento(res.data.find( unItem => unItem.id == id))  
    )
  }, [id]);

  return (
    <div>
          
          <div>
            <ItemDetail data={alimento}/>
          </div>
            
    </div>
  )

}
    

export default ItemDetailContainer
