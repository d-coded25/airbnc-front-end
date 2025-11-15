import axios from 'axios';

const getProperties = async function () {
  try {
    const { data } = await axios.get(
      'https://airbnc-northcoders-2025.onrender.com/api/properties'
    );
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export { getProperties };
