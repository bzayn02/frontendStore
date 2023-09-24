import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const ProductLists = () => {
  const { displayProducts } = useSelector((state) => state.displayProductInfo);

  return (
    <div>
      {' '}
      {displayProducts?.length ? (
        <div className="flex flex-wrap">
          {displayProducts.map((displayProduct, i) => (
            <Link
              key={i}
              to={`/product/${displayProduct.slug}`}
              className="nav-link"
            >
              <ProductCard {...displayProduct} />
            </Link>
          ))}
        </div>
      ) : (
        <div>No data to show</div>
      )}
    </div>
  );
};

export default ProductLists;
