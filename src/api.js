import axios from 'axios';

const baseURL = 'https://airbnc-northcoders-2025.onrender.com';

const getProperties = async function () {
  try {
    const { data } = await axios.get(`${baseURL}/api/properties`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const getProperty = async function (id) {
  try {
    const { data } = await axios.get(`${baseURL}/api/properties/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const getPropertyReviews = async function (id) {
  try {
    const { data } = await axios.get(`${baseURL}/api/properties/${id}/reviews`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const postReview = async function (user, id, comment, rating) {
  try {
    const { user_id: guest_id } = user;
    const reviewData = { guest_id, comment, rating };
    await axios.post(`${baseURL}/api/properties/${id}/reviews`, reviewData);
  } catch (err) {
    console.log(err.message);
  }
};

export { getProperties, getProperty, getPropertyReviews, postReview };
