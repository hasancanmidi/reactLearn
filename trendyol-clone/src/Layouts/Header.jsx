import React from "react";
import { Menu, Dropdown, Button, Container } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu size="mini">
      <Container>
      <Menu.Item name="home" />
      <Menu.Item name="messages" />

      <Menu.Menu position="right">
        <Dropdown item text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>  
    </Menu>
  );
};

export default Header;
