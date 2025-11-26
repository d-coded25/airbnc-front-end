import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PropertyDetails from './components/Main/PropertyDetails';
import Footer from './components/Footer/Footer';
import './App.css';
import ReviewForm from './components/Main/ReviewForm';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/property/:id/review-form" element={<ReviewForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
