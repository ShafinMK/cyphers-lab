import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './components/Services/Services';
// font styles 
import './fontStyles/fontStyles.css'
// background styles 
import './fontStyles/backgroundStyles.css'
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import ServiceBooking from './components/ServiceBooking/ServiceBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useEffect } from 'react';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  return (
    <div className="">



      <BrowserRouter>
      <ScrollToTop />
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/services" element={<Services></Services>} />
            <Route path='/about' element={<About></About>} />
            <Route path='/signin' element={<SignIn></SignIn>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/register' element={<Register></Register>} />
            <Route path='/services/servicebooking/:serviceID' element={<PrivateRoute><ServiceBooking></ServiceBooking></PrivateRoute>}></Route>
            <Route path='/*' element={<NotFound></NotFound>}></Route>

          </Routes>
          <Footer></Footer>
        </AuthProvider>

      </BrowserRouter>


    </div>
  );
}

export default App;
