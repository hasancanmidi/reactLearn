import React from "react";
import { Card, Image } from "semantic-ui-react";
import { getProducts } from "../Services/ProductService"; // API servisini import edin
import { useState, useEffect } from "react";

const ProductCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]); // Ürünleri tutacak state

  useEffect(() => {
    // Komponent yüklendiğinde ürünleri çek
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data); // Çekilen veriyi state'e set et
    };

    fetchProducts();
  }, []); // Boş bağımlılık dizisi, bu effect'in bir kez çalışmasını sağlar

  return (
    <div>
      <Card.Group>
        {products.map((product) => (
          <Card key={product.id}>
            <div>
              <Image
                className="product-image-container"
                src={product.image}
                wrapped
                ui={false}
              />
            </div>
            <Card.Content>
              <Card.Header>{product.title}</Card.Header>
              <Card.Meta>
                <span className="date">{product.price} $</span>
              </Card.Meta>
              <Card.Description>
                <span>{product.category}</span>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="#">Rate: {product.rating.rate}</a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default ProductCard;
