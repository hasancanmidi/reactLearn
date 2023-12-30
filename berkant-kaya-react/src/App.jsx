import Text from './components/Text'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  //const [değişken, değişkeni setlemek istediğin fonksiyon] = useState("DEFAULF")

  return (
    <div>
      <Button buttonName={"Azalt"} onClick={() => setCount(count - 1)} />
      <div>{count}</div>
      <Button buttonName={"Artır"} onClick={() => setCount(count + 1)} />

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
