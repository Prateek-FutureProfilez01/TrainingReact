import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-list">
      {data.map((item) => (
        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="car-card" key={item.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
            <center><img
              src={item.image}
              alt={item.title}
              className="card-img-top"
              style={{ width: '290px', height: '150px', objectFit: 'contain' }}
            /> </center>
            <div className="car-info">

              <p><strong>Id:</strong> {item.id}</p>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Rating:</strong>
                {[...Array(Math.floor(item.rating.rate))].map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Product;
