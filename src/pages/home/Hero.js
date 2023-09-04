import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container } from 'react-bootstrap';
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import ProductLists from '../products/ProductLists';

const Hero = () => {
  return (
    <div>
      <Layout>
        <div className="main">
          <Container>
            <div>
              <CustomCarousel />
              <ProductLists />
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default Hero;
