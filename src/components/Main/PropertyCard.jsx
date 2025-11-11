import './PropertyCard.css';

function PropertyCard(props) {
  const { property } = props;
  const {
    property_name: name,
    location,
    price_per_night: price,
    img,
  } = property;

  return (
    <li className="property-card">
      <article>
        <img src={img} alt={name} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>£{price} per night</h3>
      </article>
    </li>
  );
}

export default PropertyCard;
