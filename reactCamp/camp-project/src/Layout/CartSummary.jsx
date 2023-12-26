import React from 'react'
import { Dropdown } from "semantic-ui-react";


export default function CartSummary() {
  return (
    <Dropdown item text="Sepet Özeti">
    <Dropdown.Menu>
      <Dropdown.Item>Trabzonspor Atkısı</Dropdown.Item>
      <Dropdown.Item>Trabzonspor Forması</Dropdown.Item>
      <Dropdown.Item>Trabzonspor Bilekliği</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
