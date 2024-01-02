import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useRef } from 'react';

function App() {

  const textRef = useRef();

  console.log(textRef.current,"textRef")

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </Router>

      <div ref={textRef}>text ref react</div>
    </>
  )
}

export default App
