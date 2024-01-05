import React, { useState, useEffect } from "react";
import {Image, Card,Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProductService from "../Services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi!`)
  };
  return (
    <div>

      <Card.Group>
        {products.map((product) => (
          <Card key={product.id}>
            <div className="product-image-container">
              <Image src={product.image} wrapped ui={false} />
            </div>
            <Card.Content>
              <Card.Header><Link to={`/products/${product.title}`}>
                  {product.title}
                </Link></Card.Header>{" "}
              <Card.Meta>
                <span>{product.price}$</span>
              </Card.Meta>
              <Card.Description>{product.category}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>Rating : {product.rating.rate}</a>  <Button onClick={()=>handleAddToCart(product)}>Sepete ekle</Button>

            </Card.Content>
          </Card>
        ))}
      </Card.Group>

    </div>
  );
}
