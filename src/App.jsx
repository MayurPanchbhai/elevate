import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { DataProvider } from './Context';
import Navbar from './Navbar';
import Cart from './Cart';
import { MensDetails } from './Component/MensDetails';
import Men from './Men';
import Women from './Women';
import { WomenDetails} from './Component/WomenDetails';

// ConditionalRoute component to display random page
const ConditionalRoute = () => {
  const [randomPage, setRandomPage] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
      case 1:
        setRandomPage(<Page1 />);
        break;
      case 2:
        setRandomPage(<Page1 />);
        break;
      default:
        setRandomPage(<Page1 />);
        break;
    }
  }, []);

  return randomPage;
};

// App component to conditionally render Navbar based on path
const AppContent = () => {
  const location = useLocation();
  const isLoginPath = location.pathname === '/login';

  return (
    <>
      {!isLoginPath && <Navbar />}
      <Routes>
        <Route path="/login" element={<ConditionalRoute />} />
        <Route path="/" element={<Home />}  />
        <Route path="/men" element={<Men />}  />
        <Route path="/men/:id" element={<MensDetails />}  />
        <Route path="/women" element={<Women />} />
        <Route path="/women/:id" element={<WomenDetails />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/details' element={<MensDetails />} /> */}
      </Routes>
    </>
  );
};

// Main App component wrapping everything in Router
function App() {
  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
}

export default App;
