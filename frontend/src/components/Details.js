import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Details</h2>
      <p>Details for benefit ID: {id}</p>
    </div>
  );
};

export default Details;
