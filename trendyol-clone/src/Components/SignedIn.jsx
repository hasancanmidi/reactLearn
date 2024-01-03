import React from 'react'
import { Menu,Image ,Dropdown } from 'semantic-ui-react'


export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
          <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/74327275?v=4"/>
          <Dropdown pointing="top left" text="Hasan Can Midi">
            <Dropdown.Menu>
              <Dropdown.Item text="Bilgilerim" icon="info"/>
              <Dropdown.Item  onClick={props.SignOut} text="Çıkış Yap" icon="sign-out"/>
           </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
    </div>
  )
}