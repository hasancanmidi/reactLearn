import Text from './components/Text'
import Button from './components/Button'

function App() {
  return (
    <div>
       <Text number="1" lesson={"React Eğitimi"}/>
       <Text number="2" lesson={"C# Eğitimi"}/>
       <Text number="3" lesson={"Java Eğitimi"}/>
       <Button buttonName={"Ekle"}/>
       <Button buttonName={"Sil"}/>
       <Button buttonName={"Güncelle"}/>
    </div>
  )
}

export default App
