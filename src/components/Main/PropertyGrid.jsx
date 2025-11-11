import './PropertyGrid.css';

import PropertyCard from './PropertyCard';

function PropertyGrid(props) {
  const { properties } = props;

  const propertyCards = properties.map((property) => {
    return <PropertyCard property={property} />;
  });

  return (
    <section className="property-grid">
      <article>
        <ul>{propertyCards}</ul>
      </article>
    </section>
  );
}

export default PropertyGrid;
