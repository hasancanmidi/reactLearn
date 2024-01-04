import { useState } from 'react';
import './App.css';
import input from './components/Input'
function App() {
const[todo,setTodo] = useState<string>('')



  // let name : string = "Hasan Can";
  // let age : number = 25
  // let done : boolean = true
  // let trial : number | string = 5

  // interface obj{
  //   name: String,
  //   age: number,
  //   done?: boolean,
  // }

  // interface objTwo extends obj{
  //   accept?: Boolean;
  // }

  // let obj : objTwo = {
  //   name: "Hasan Can",
  //   age: 25,
  //   //done: true
  // }
  return (
    <div className="App">
      <input/>
    </div>
  );
}

export default App;
