import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";  
import Booking from "./Booking/BookingPage";
import Order from "./Order";
import Login from "./Login";
import Confirmation from "./Booking/Confirmation";
import NotFound from "./NotFound";  

export default function Routing() {
  return (
    <Routes>
      
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Booking />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}