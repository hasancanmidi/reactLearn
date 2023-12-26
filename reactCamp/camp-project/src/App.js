import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './Layout/Dashboard';
import Navi from './Layout/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className='main'>
      <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
