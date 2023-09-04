import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';

const ProductLanding = () => {
  const { _id, slug } = useParams();
  return (
    <Layout>
      <div className="main">Product Landing page {slug}</div>
    </Layout>
  );
};

export default ProductLanding;
