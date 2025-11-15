import { useState, useEffect } from 'react';

import { getProperties } from '../../api';
import PropertyCard from './PropertyCard';

import './PropertyGrid.css';

function PropertyGrid() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(null);

  const fetchProperties = async () => {
    try {
      const { properties } = await getProperties();
      setProperties(properties);
      setIsLoading(false);
    } catch (err) {
      setHasErrored(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const propertyCards = properties.map((property) => {
    const { property_id: id } = property;
    return <PropertyCard property={property} key={id} />;
  });

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (hasErrored) {
    content = <h2>Something went wrong...</h2>;
  } else {
    content = <ul>{propertyCards}</ul>;
  }

  return <section className="property-grid">{content}</section>;
}

export default PropertyGrid;
