import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ItemDetailContainer = () => {
  const [alimento, setAlimento] = useState([]);

 
  let {id} = useParams();

  console.log('id', id)


  useEffect(() => {
    axios(`https://dog-food-25e01-default-rtdb.firebaseio.com/alimentos.json/${id}`)
    .then((res) => setAlimento(res.data)
    )
  }, [id]);

  return (
    <div>

      <h1>Detalle</h1>
          <div>
            {alimento.map((item) => {
              console.log(item)
              return (
                <div  key={item.id}>
                    <ItemDetail data={item} />
                </div>
              );
            })}
          </div>
            
    </div>
  )

}
    

export default ItemDetailContainer
