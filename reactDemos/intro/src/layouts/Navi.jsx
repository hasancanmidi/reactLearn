import React from 'react'
import { Button,List } from 'semantic-ui-react'


export default function Navi() {
  return (
    <div><Button content='Click Here' />
      <List>
    <List.Item>
      <List.Header>New York City</List.Header>A lovely city
    </List.Item>
    <List.Item>
      <List.Header>Chicago</List.Header>
      Also quite a lovely city
    </List.Item>
    <List.Item>
      <List.Header>Los Angeles</List.Header>
      Sometimes can be a lovely city
    </List.Item>
    <List.Item>
      <List.Header>San Francisco</List.Header>
      What a lovely city
    </List.Item>
  </List>
    </div>
    
  )
}
