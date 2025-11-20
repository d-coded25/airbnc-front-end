import { Link } from 'react-router';
import './PropertyCard.css';

function PropertyCard(props) {
  const { property } = props;
  const {
    property_id: id,
    property_name: name,
    location,
    price_per_night: price,
    image,
  } = property;

  return (
    <li className="property-card">
      <Link className="property-link" to={`/property/${id}`}>
        <article>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>{location}</h3>
          <h3>£{price} per night</h3>
        </article>
      </Link>
    </li>
  );
}

export default PropertyCard;
