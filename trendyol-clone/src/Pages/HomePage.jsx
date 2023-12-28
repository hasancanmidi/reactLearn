import React from "react";
import { Container } from 'semantic-ui-react';
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import MainDashboard from '../Layouts/MainDashboard';


const HomePage = () => {
  return (
    <div>
      {" "}
      <div>
        <Header />
        <Container className="main">
          <MainDashboard />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;

