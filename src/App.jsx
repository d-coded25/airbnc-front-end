import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const { properties } = {
  properties: [
    {
      property_id: 1,
      property_name: 'Modern Apartment in City Center',
      location: 'London, UK',
      price_per_night: '120',
      host: 'Alice Johnson',
      image: 'https://example.com/images/modern_apartment_1.jpg',
    },
    {
      property_id: 2,
      property_name: 'Cosy Family House',
      location: 'Manchester, UK',
      price_per_night: '150',
      host: 'Alice Johnson',
      image: 'https://example.com/images/cosy_family_house_1.jpg',
    },
    {
      property_id: 3,
      property_name: 'Chic Studio Near the Beach',
      location: 'Brighton, UK',
      price_per_night: '90',
      host: 'Alice Johnson',
      image: 'https://example.com/images/chic_studio_1.jpg',
    },
    {
      property_id: 4,
      property_name: 'Elegant City Apartment',
      location: 'Birmingham, UK',
      price_per_night: '110',
      host: 'Emma Davis',
      image: 'https://example.com/images/elegant_city_apartment_1.jpg',
    },
    {
      property_id: 5,
      property_name: 'Charming Studio Retreat',
      location: 'Bristol, UK',
      price_per_night: '85',
      host: 'Emma Davis',
      image: 'https://example.com/images/charming_studio_1.jpg',
    },
    {
      property_id: 6,
      property_name: 'Luxury Penthouse with View',
      location: 'London, UK',
      price_per_night: '250',
      host: 'Alice Johnson',
      image: 'https://example.com/images/luxury_penthouse_1.jpg',
    },
    {
      property_id: 7,
      property_name: 'Spacious Countryside House',
      location: 'Yorkshire, UK',
      price_per_night: '200',
      host: 'Isabella Martinez',
      image: 'https://example.com/images/spacious_house_1.jpg',
    },
    {
      property_id: 8,
      property_name: 'Seaside Studio Getaway',
      location: 'Cornwall, UK',
      price_per_night: '95',
      host: 'Emma Davis',
      image: 'https://example.com/images/seaside_studio_1.jpg',
    },
    {
      property_id: 9,
      property_name: 'Cosy Loft in the Heart of the City',
      location: 'Manchester, UK',
      price_per_night: '130',
      host: 'Isabella Martinez',
      image: 'https://example.com/images/cosy_loft_1.jpg',
    },
    {
      property_id: 10,
      property_name: 'Quaint Cottage in the Hills',
      location: 'Lake District, UK',
      price_per_night: '180',
      host: 'Isabella Martinez',
      image: 'https://example.com/images/quaint_cottage_1.jpg',
    },
  ],
};

function App() {
  return (
    <>
      <Header />
      <Main properties={properties} />
      <Footer />
    </>
  );
}

export default App;
