import './App.css';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import OfferDetail from './pages/OfferDetails';
import NewArrivalsPage from './pages/NewArrivals';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <ToastContainer theme="dark" position="top-center" />

        {/* Header stays at top */}
        <Header cartItems={cartItems} />

        {/* Main content expands to fill space */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/search" element={<Home />} />
            <Route
              path="/product/:id"
              element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />}
            />
            <Route path="/offer/:id" element={<OfferDetail />} />
            <Route path="/arrivals" element={<NewArrivalsPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
            />
          </Routes>
        </main>

        {/* Footer sticks to bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
