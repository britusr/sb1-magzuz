import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/admin/Dashboard';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;