import React from "react";
import { ToastContainer } from "react-toastify";
import Categories from "./Categories";
import ProductList from "../Pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../Pages/CartDetail";
import ProductDetail from "../Pages/ProductDetail";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:title" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
