import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  );
}

export default App;
