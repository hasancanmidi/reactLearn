import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Services/ProductService";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  CardGroup,
} from "semantic-ui-react";

const Detail = () => {
  const { id } = useParams();
  const [getDetail, setDetail] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (id) {
        const products = await getProducts();
        const productDetail = products.find(
          (product) => product.id == id
        );
        setDetail(productDetail);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!getDetail) {
    return <div>Veri Yükleniyor...</div>;
  }
  return (
    <>
      <Header/>
      <CardGroup  style={{marginTop:"4em", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Card>
          <Image src={getDetail.image} wrapped ui={false} />
          <CardContent>
            <CardHeader>{getDetail.title}</CardHeader>
            <CardMeta>
              <span>{getDetail.price} $</span>
            </CardMeta>
            <CardDescription>{getDetail.description}</CardDescription>
          </CardContent>
          <CardContent extra>
            <a>{getDetail.rating.rate}</a>
          </CardContent>
        </Card>
      </CardGroup>
      <Footer />
    </>
  );
};

export default Detail;
