import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Para() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProduct(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: "900px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.title}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              padding: "10px"
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              <strong>Description:</strong> {product.description}
            </p>
            <p className="card-text">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="card-text">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="card-text">
              <strong>Rating:</strong>{" "}
              {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
                <span key={i}>⭐</span>
              ))}{" "}
              ({product.rating.count} reviews)
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
