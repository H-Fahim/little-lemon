import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;