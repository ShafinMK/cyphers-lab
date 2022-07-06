import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './components/Services/Services';
// font styles 
import './fontStyles/fontStyles.css'
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="">


      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/signin' element={<SignIn></SignIn>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path='/*' element={<NotFound></NotFound>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
