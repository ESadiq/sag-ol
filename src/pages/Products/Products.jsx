import React, { useState, useEffect } from "react";
import './product.css';
import { FaShoppingCart, FaHeart, FaPlus, FaExpand } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import SearchForm from "../../components/SearchForm/SearchForm"; // SearchForm'u import ediyoruz

const Products = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([
    { id: 1, title: "ZULU Swift 32 Fluid", price: "14.00", popularity: 4, discount: 0 },
    { id: 2, title: "Athletic Fitness Mat", price: "17.97", popularity: 3, discount: 15 },
    { id: 3, title: "ProForm Carbon", price: "598.00", popularity: 5, discount: 5 },
    { id: 4, title: "Resistance Bands Set", price: "11.50", popularity: 2, discount: 0 },
    { id: 5, title: "everlast hand wraps", price: "9.99", popularity: 4, discount: 10 },
    { id: 6, title: "Dumbbell", price: "22.00", popularity: 3, discount: 8 },
    { id: 7, title: "Kettlebell", price: "8.00", popularity: 5, discount: 0 },
    { id: 8, title: "Jump Rope", price: "25.00", popularity: 4, discount: 12 },
    { id: 9, title: "Medicine Ball", price: "18.00", popularity: 3, discount: 6 },
    { id: 10, title: "Yoga Block", price: "30.00", popularity: 5, discount: 15 },
    { id: 11, title: "Adjustable Weight Bench", price: "75.00", popularity: 4, discount: 20 },
    { id: 12, title: "Adjustable Pull-Up Bar", price: "25.00", popularity: 5, discount: 10 },
    { id: 13, title: "Heavy Duty Pull-Up Bar", price: "30.00", popularity: 4, discount: 15 },
    { id: 14, title: "Adjustable Dumbbell Set", price: "60.00", popularity: 3, discount: 5 },
    { id: 15, title: "Yoga Mat", price: "22.00", popularity: 4, discount: 8 },
    { id: 16, title: "Dumbbell Set", price: "28.00", popularity: 5, discount: 12 },
    { id: 17, title: "Power Tower", price: "35.00", popularity: 4, discount: 20 },
    { id: 18, title: "Multi-Grip Pull-Up Bar", price: "27.00", popularity: 3, discount: 7 },
    { id: 19, title: "Resistance Bands", price: "20.00", popularity: 3, discount: 10 },
    { id: 20, title: "Home Gym Station", price: "23.00", popularity: 4, discount: 6 },
    { id: 21, title: "Kettlebell", price: "19.00", popularity: 5, discount: 15 },
    { id: 22, title: "High Capacity Treadmill", price: "492.00", popularity: 4, discount: 8 },
    { id: 23, title: "Foam Roller", price: "21.00", popularity: 3, discount: 5 },
    { id: 24, title: "Heavy Duty Bench Press", price: "33.00", popularity: 5, discount: 10 },
    { id: 25, title: "Gymnastics Rings", price: "24.00", popularity: 4, discount: 12 },
    { id: 26, title: "Gymnastics Mat", price: "38.00", popularity: 5, discount: 15 },
    { id: 27, title: "Compact Multi-Grip", price: "26.00", popularity: 3, discount: 7 },
    { id: 28, title: "Jump Rope", price: "22.00", popularity: 4, discount: 8 },
    { id: 29, title: "Space-Saving Exercise Bike", price: "21.00", popularity: 3, discount: 10 },
    { id: 30, title: "Elite Rowing Machine", price: "29.00", popularity: 4, discount: 12 },
    { id: 31, title: "15lb Medicine Ball", price: "30.00", popularity: 5, discount: 15 },
    { id: 32, title: "Exercise Step Platform", price: "27.00", popularity: 4, discount: 8 },
    { id: 33, title: "Heavy Duty Squat Rack", price: "34.00", popularity: 5, discount: 10 },
    { id: 34, title: "Poly Dacron 40 FT", price: "25.00", popularity: 4, discount: 7 },
    { id: 35, title: "Dumbbells Set with Rack", price: "42.99", popularity: 5, discount: 12 },
    { id: 36, title: "Elliptical Machine", price: "199.99", popularity: 3, discount: 5 }
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products); // Başlangıçta tüm ürünleri göster
  }, [products]);

  return (
    <div>
      <SearchForm products={products} setFilteredProducts={setFilteredProducts} />
      <section className="section-products" id="Products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>{t('featured_products')}</h3>
                <h2>{t('popular_products')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredProducts.map(product => (
              <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                <div id={`product-${product.id}`} className="single-product">
                  <div className="part-1">
                    <ul>
                      <li><a href="#"><FaShoppingCart /></a></li>
                      <li><a href="#"><FaHeart /></a></li>
                      <li><a href="#"><FaPlus /></a></li>
                      <li><a href="#"><FaExpand /></a></li>
                    </ul>
                  </div>
                  <div className="part-2">
                    <h3 className="product-title">{product.title}</h3>
                    {product.discount > 0 && (
                      <h4 className="product-old-price">${(parseFloat(product.price) + parseFloat(product.discount)).toFixed(2)}</h4>
                    )}
                    <h4 className="product-price">${product.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;







