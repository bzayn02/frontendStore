import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container } from 'react-bootstrap';
import { getProductsByCatIdAPI } from '../../helper/axios';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

const CategoryPage = () => {
  const { _id, slug } = useParams();
  console.log(_id, slug);

  const [displayProductsByCatId, setDisplayProductsByCatId] = useState([]);

  useEffect(() => {
    const getSelectedCatProducts = async () => {
      const { result } = await getProductsByCatIdAPI({ _id, slug });
      result?.length
        ? setDisplayProductsByCatId(result)
        : setDisplayProductsByCatId([]);
    };
    getSelectedCatProducts();
  }, [_id, slug]);

  return (
    <div>
      <Layout>
        <div className="main bg-green-50">
          <Container>
            {displayProductsByCatId.length ? (
              <div className="flex flex-wrap ">
                {' '}
                {displayProductsByCatId.map((displayProduct, i) => (
                  <Link
                    to={`/product/${displayProduct.slug}/${displayProduct._id}`}
                    className="nav-link"
                  >
                    <ProductCard {...displayProduct} />
                  </Link>
                ))}
              </div>
            ) : (
              <div>No data to show</div>
            )}
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPage;
