import React, { useEffect, useState } from 'react';

import { getProducts } from '../utills/constants';
import { IProduct } from '../interfaces/IProduct';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.products);
    };
    fetchData();
  }, []);

  const productCategory = [
    ...new Set(products.map((product: IProduct) => product.category)),
  ];

  console.log(productCategory);
  return (
    <div className="grid-container">
      {productCategory.map((category, index) => (
        <Link key={index} to="">
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
