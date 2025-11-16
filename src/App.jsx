import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PropertyDetails from './components/Main/PropertyDetails';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api/properties/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
