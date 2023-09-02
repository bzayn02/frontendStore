import React from 'react';
import Layout from '../../components/Layout';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CategoryPage = () => {
  const { categories } = useSelector((state) => state.categoryInfo);

  return (
    <div>
      <Layout>
        <div className="main bg-green-50">
          <Container>
            <div className=""> Category page</div>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPage;
