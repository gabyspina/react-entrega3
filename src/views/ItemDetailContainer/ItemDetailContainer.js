import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

//Firebase

import { db } from '../../firebase/firebaseConfig'
import {collection, query, getDocs, documentId, where} from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [alimento, setAlimento] = useState([]);
 
  const {id} = useParams();

  useEffect(() => {
    
    const getAlimento = async () => {
      const q = query(collection(db, 'food'), where(documentId(), '==', id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });
      setAlimento(docs);

    };
    getAlimento();

  }, [id]);

  return (
    <div>
          
          {alimento.map((data) =>{  
             
            return <ItemDetail productos={data} key={data.id}/>
            
            })}
            
    </div>
  )

}
    

export default ItemDetailContainer
