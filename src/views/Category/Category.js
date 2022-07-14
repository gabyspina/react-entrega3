import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'


const Category = () => {
    const {  category } = useParams();


    return (
    <div>
        
        <ItemListContainer category ={category} />


    </div>
  )

}

export default Category
