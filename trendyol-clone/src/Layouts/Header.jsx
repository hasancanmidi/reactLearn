import React, {useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "../Components/SignedIn";
import SignedOut from "../Components/SignedOut";
import CartSummary from "../Components/CartSummary";
import { useNavigate } from "react-router-dom";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()

  function handleSignOut(params){
    setIsAuthenticated(false)
    navigate('/')
  }
  function handleSignIn(params){
    setIsAuthenticated(true)
  }
  return (
    <div style={{marginBottom:'7em'}}>
      <Menu color='orange' inverted fixed="top">
        <Container>
          <Menu.Item name="Anasayfa" />
          <Menu.Item name="Ürünler" />
          <Menu.Menu   position="right" style={{ display: 'flex', alignItems: 'center' }}>
            <CartSummary/>
            {isAuthenticated ? <SignedIn SignOut={handleSignOut} /> : <SignedOut SignIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}