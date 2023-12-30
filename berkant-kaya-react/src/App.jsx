import Text from './components/Text'
import Button from './components/Button'
function App() {
  return (
    <div>
       <Button buttonName={"Ekle"}/>
       <Text number="1" lesson={"React Eğitimi"}/>
       <Button buttonName={"Ekle"}/>
       <Text number="2" lesson={"C# Eğitimi"}/>
       <Button buttonName={"Ekle"}/>
       <Text number="3" lesson={"Java Eğitimi"}/>
       <Button buttonName={"Değişiklikleri Kaydet"}/>
    </div>
  )
}

export default App
