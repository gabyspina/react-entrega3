import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'

import { Link } from 'react-router-dom'

// Firebase

import {collection, query, getDocs} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'

const ItemListContainer = (category) => {

  const [productos, setProductos] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, 'food'));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProductos(docs);

    };
    getProductos();

  }, []);

  return(
    <div className="items-class">
      
      {productos.map((data) =>{

        return(
          <div key={data.id}>
            <Link to={`/detail/${data.id}`}>
                
                <Item productos={data}/>

            </Link>

              </div>
          

              ) 
      })}

      
    </div>
  );
  }

export default ItemListContainer