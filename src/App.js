import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import Oculos from './components/Oculos';

// Componente para o layout padrão com Navbar
const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DefaultLayout>
            <Hero />
            <Destinations />
            <Search />
            <Selects />
            <ImgCarousel />
          </DefaultLayout>
        } />
        <Route path="/oculos" element={<Oculos />} />
      </Routes>
    </Router>
  );
}

export default App;
