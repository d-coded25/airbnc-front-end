import { useState } from 'react';
import { useParams } from 'react-router';
import { postReview } from '../../api';
import './ReviewForm.css';

const user = {
  user_id: 6,
  first_name: 'Rachel',
  surname: 'Cummings',
  email: 'rachel@example.com',
  phone_number: '+44 7000 666666',
  is_host: false,
  avatar: 'https://example.com/images/rachel.jpg',
};

function ReviewForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const { id } = useParams();

  const updateComment = function (evt) {
    const currentValue = evt.target.value;
    setComment(currentValue);
  };

  const updateRating = function (evt) {
    const currentValue = evt.target.value;
    const minValue = evt.target.min;
    const maxValue = evt.target.max;

    const isValueCorrectLength = currentValue.length === 1;
    const isValueWithinRange =
      currentValue >= minValue && currentValue <= maxValue;

    isValueCorrectLength && isValueWithinRange
      ? setRating(currentValue)
      : setRating('');
  };

  const submitReview = function (evt) {
    evt.preventDefault();
    postReview(user, id, comment, rating);
    setComment('');
    setRating('');
  };

  return (
    <form className="review-form">
      <h2>Review Form</h2>

      <label htmlFor="comment">Comment:</label>
      <textarea
        name="comment"
        placeholder="review..."
        value={comment}
        cols="20"
        rows="5"
        required
        id="comment"
        onChange={updateComment}
      ></textarea>

      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        name="rating"
        placeholder="rating..."
        value={rating}
        min={0}
        max={5}
        required
        id="rating"
        onChange={updateRating}
      />

      <button type="submit" onClick={submitReview}>
        Post Review
      </button>
    </form>
  );
}

export default ReviewForm;
