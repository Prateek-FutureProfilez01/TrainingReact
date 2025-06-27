import React from 'react';

function CarCard({ name, image, speed, brand }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <div className="car-info">
        <h2>{name}</h2>
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Top Speed:</strong> {speed} km/h</p>
      </div>
    </div>
  );
}

export default CarCard;
