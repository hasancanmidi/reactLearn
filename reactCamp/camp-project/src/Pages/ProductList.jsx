import React, { useState, useEffect } from "react";
import { Icon, Menu, Table,Image } from "semantic-ui-react";
import ProductService from "../Services/productService";

export default function ProductList() {
  //Hook lifecycle hook
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //component yüklediğinde yapılmasını istediğin kodu buraya yazıyosun
    let productService = new ProductService();
    productService.getProducts().then(result=>setProducts(result.data))
  })

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Ürün Fotoğrafı</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Ürün Puanı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.Id}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell><Image src={product.image} size='small' /></Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>{product.price} $</Table.Cell>
              <Table.Cell>{product.rating.rate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
