import Text from './components/Text'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const [name, setName] = useState(null)
  const [data, setData] = useState([])

  //const [değişken, değişkeni setlemek istediğin fonksiyon] = useState("DEFAULF")
  console.log(name, "name")

  const clickFunc = () =>{
    setData(p => [...p,name])
  }

  console.log(data, "data")

  return (
    <div>
      <input type="text" onChange={(d) => setName(d.target.value)}/>
      <Button buttonName={"Tıkla"} onClick={clickFunc}/>
      <div>
        {
          data.map((gez,index) => (
            <div key={index}>{gez}</div>
          ))
        }
      </div>

      {/* <Button buttonName={"Azalt"} onClick={() => setCount(count - 1)} />
      <div>{count}</div>
      <Button buttonName={"Artır"} onClick={() => setCount(count + 1)} /> */}

       {/* <Text number="1" lesson={"React Eğitimi"}/>
       <Text number="2" lesson={"C# Eğitimi"}/>
       <Text number="3" lesson={"Java Eğitimi"}/>
       <Button buttonName={"Ekle"}/>
       <Button buttonName={"Sil"}/>
       <Button buttonName={"Güncelle"}/> */}
    </div>
  )
}

export default App
