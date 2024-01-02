import React from "react";
import { Card, Image } from "semantic-ui-react";
import { getProducts } from "../Services/ProductService"; // API servisini import edin
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
const fetchProducts = async () => {
  try {
    const data = await getProducts();
    setProducts(data);
  } catch (error) {
    console.error("Ürünler yüklenirken bir hata oluştu:", error);
  }
};


    fetchProducts();
  }, []); // Boş bağımlılık dizisi, bu effect'in bir kez çalışmasını sağlar

  const goToProductDetail = (productId) => {
    navigate(`/detail/${productId}`); // Doğru URL
  };
  

    return (
      <div>
        <Card.Group>
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => goToProductDetail(product.id)}
              style={{ cursor: "pointer" }}
            >
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
