import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../../api/api";
import ProductCard from "../../components/Card/ProductCard";
import './category.css'

const CategoryPage = () => {
  const [products, setProducts] = useState();
  const { id } = useParams();

  useEffect(() => {
    services.productAPI.getProductsByCategoryID(id, setProducts);
  }, []);

  if(products && products.length === 0) {
    return <div className="alert alert-primary text-center w-25 mx-auto my-5">Bu kateqoriyaya uyğun məhsul yoxdur...</div>
  }

  const filterHandler = (e) => {
        services.productAPI.filterProducts(id, e.target.value, setProducts)
  }

  return (
    <div className="container">
        <div className="category-top d-flex justify-content-between align-items-center">
            <h3>Bütün məhsullar</h3>
            <select onChange={filterHandler} className='form-control'>
                <option value="1">A-Z</option>
                <option value="2">Z-A</option>
                <option value="3">Ucuzdan bahaya</option>
                <option value="4">Bahadan ucuza</option>
            </select>
        </div>
      <div className="row my-4">
        {products
          ? products.map((item) => {
              return <ProductCard key={item.product_id} data={item} />;
            })
          : "yüklənir..."}
      </div>
    </div>
  );
};

export default CategoryPage;
