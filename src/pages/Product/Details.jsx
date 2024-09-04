import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import services from '../../api/api';
import './details.css'

const Details = () => {
  const [product, setProduct] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await services.productAPI.getProductById(id, (data) => {
          if (data && data.length > 0) {
            setProduct(data[0]);
          } else {
            setProduct(null); 
          }
        });
      } catch (error) {
        console.error('Product fetching error:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className='container'>
      {product ? (
        <div className="row">
          <div className="col-lg-3">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="product-details">
            <h1>{product.title}</h1>
            <p>{product.name}</p>
            <p>{product.price} ₼</p>
            <span className={product.isAvailable === 1 ? 'bg-success' : 'bg-danger'}>{product.isAvailable === 1 ? 'Anbarda var' : 'Məhsul bitib'}</span>
            </div>
          </div>
        </div>
      ) : (
        'Yüklənir...'
      )}
    </div>
  );
};

export default Details;
