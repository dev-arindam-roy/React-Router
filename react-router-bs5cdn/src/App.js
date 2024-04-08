import './App.css';
import { Routes, Route } from 'react-router-dom';

import HeaderNav from './components/HeaderNav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="/contact-us" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
