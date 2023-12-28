import React from "react";
import CategoryList from "./CategoryList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import ProductCard from "../Components/ProductCard";
import { useState } from 'react';


export default function MainDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <CategoryList  />
          </Grid.Column>
          <Grid.Column width={13}>
            <ProductCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
