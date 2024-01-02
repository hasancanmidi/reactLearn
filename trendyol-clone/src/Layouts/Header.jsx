import React, {useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "../Components/SignedIn";
import SignedOut from "../Components/SignedOut";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  function handleSignOut(params){
    setIsAuthenticated(false)
  }
  function handleSignIn(params){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Anasayfa" />
          <Menu.Item name="Ürünler" />
          
          <Menu.Menu position="right">
            {isAuthenticated ? <SignedIn SignOut={handleSignOut} /> : <SignedOut SignIn={handleSignIn}/>}

          </Menu.Menu>

        </Container>
      </Menu>
    </div>
  );
}