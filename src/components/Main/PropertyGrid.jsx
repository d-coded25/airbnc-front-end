import './PropertyGrid.css';

import PropertyCard from './PropertyCard';

function PropertyGrid(props) {
  const { properties } = props;

  const propertyCards = properties.map((property) => {
    const { property_id: id } = property;
    return <PropertyCard property={property} key={id} />;
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
