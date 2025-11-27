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
    const { property } = await getProperty(id);
    return property;
  };

  const fetchPropertyReviews = async function (id) {
    const { reviews } = await getPropertyReviews(id);
    return reviews;
  };

  useEffect(() => {
    try {
      const fetchPropertyAndReviews = async function (id) {
        const [property, reviews] = await Promise.all([
          fetchProperty(id),
          fetchPropertyReviews(id),
        ]);
        setProperty(property);
        setReviews(reviews);
        setIsLoading(false);
      };
      fetchPropertyAndReviews(id);
    } catch (err) {
      setHasErrored(err);
      setIsLoading(false);
    }
  }, [id, property, reviews]);

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
          <h4>
            <span>{rating}</span> / 5
          </h4>
          <h4>{guest}</h4>
          <img src={guest_avatar} alt={guest} />
        </li>
      );
    });

    content = (
      <>
        <article className="property-details">
          <ul className="images">{imagesList}</ul>
          <h2>{name}</h2>
          <h3>{description}</h3>
          <h4>{location}</h4>
          <h4>
            <span>£{price}</span> per night
          </h4>
          <h4>{host}</h4>
          <img src={host_avatar} alt={host} />

          <button className="review-btn">Leave A Review</button>

          <h2>Reviews</h2>
          <ul className="reviews">{reviewsList}</ul>
        </article>
      </>
    );
  }

  return <section>{content}</section>;
}

export default PropertyDetails;
