import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import AddToCartComp from './component/AddToCartComp';
import Electronics from './component/Electronics';
import Garments from './component/Garments';
import Home from './component/Home';
import NavbarComponent from './component/Navbar';
import Tools from './component/Tools';
import Toys from './component/Toys';

function App() {
  localStorage.setItem("data",JSON.stringify([])) 
  return (
    <div>
      <NavbarComponent />

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/garments" element={<Garments />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/addToCartComp" element={<AddToCartComp />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Toys" element={<Toys />} />

        </Routes>
    </div>
  );
}

export default App;
