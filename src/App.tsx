import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import CategoryPage from './pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import FormPage from './pages/FormPage';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import CartPage from './pages/CartPage';

import './App.css';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<FormPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
