import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from './Home'

const Detail = () => {
  const {id} = useParams();
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    if(id){
         setGetData(data.find(dt=>dt.id == id))
    }
  },[id]) //id'ye bağlı olsun id her güncellendiğinde sayfa güncellensin

  if (!getData) {
    return <div>Veri yükleniyor veya bulunamadı...</div>;
  }

  return (
    <div>
      <div>{getData.name}</div>
      <div>{getData.description}</div>
    </div>
  )
}

export default Detail