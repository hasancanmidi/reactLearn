import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


const CartSummary = () => {
  return (
    <div>
        <Dropdown item text="Sepet">
            <Dropdown.Menu>
                <Dropdown.Item>Samsung 27inc Monitor 165Hz</Dropdown.Item>
                <Dropdown.Item>Hdmi Convertor typeC</Dropdown.Item>
                <Dropdown.Item>Notebook Cooler</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default CartSummary