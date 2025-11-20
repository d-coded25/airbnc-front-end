import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProperty, getPropertyReviews } from '../../api';
import './PropertyDetails.css';

function PropertyDetails() {
  const [property, setProperty] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(null);

  const { id } = useParams();

  const fetchProperty = async function (id) {
    try {
      const { property } = await getProperty(id);
      setProperty(property);
      setIsLoading(false);
    } catch (err) {
      setHasErrored(err);
      setIsLoading(false);
    }
  };

  const fetchPropertyReviews = async function (id) {
    try {
      const { reviews } = await getPropertyReviews(id);
      setReviews(reviews);
      setIsLoading(false);
    } catch (err) {
      setHasErrored(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty(id);
    fetchPropertyReviews(id);
  }, []);

  const {
    property_name: name,
    location,
    price_per_night: price,
    description,
    host,
    host_avatar,
    images,
  } = property;

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (hasErrored) {
    content = <h2>Something went wrong...</h2>;
  } else {
    const imagesList = images.map((img, idx) => {
      return (
        <li key={idx}>
          <img src={img} alt={name} />
        </li>
      );
    });

    const reviewsList = reviews.map((review) => {
      const { review_id: id, comment, rating, guest, guest_avatar } = review;
      return (
        <li key={id}>
          <p>{comment}</p>
          <h3>{rating}</h3>
          <h4>{guest}</h4>
          <img src={guest_avatar} alt={guest} />
        </li>
      );
    });

    content = (
      <>
        <ul>{imagesList}</ul>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h2>{location}</h2>
        <h3>£{price} per night</h3>
        <h4>{host}</h4>
        <img src={host_avatar} alt={host} />
        <ul>{reviewsList}</ul>
      </>
    );
  }

  return <article className="property-details">{content}</article>;
}

export default PropertyDetails;
