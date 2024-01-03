import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Detail from './Pages/Detail';
import CartDetail from './Pages/CartDetail';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/cart' element={<CartDetail/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
