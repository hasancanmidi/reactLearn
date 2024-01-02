import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../Services/ProductService';

const Detail = () => {
    const {id} = useParams();
    const[getDetail, setDetail] = useState(null);

    useEffect(() => {
        if(id){
            setDetail(getProducts.find(product=>product.id == id))
        }
    },[id])

    if(!getDetail){
        return <div>Veri Yükleniyor...</div>
    }
  return (
    <div>
        <div>{getDetail.title}</div>
    </div>
  )
}

export default Detail