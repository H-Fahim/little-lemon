import { Routes, Route } from "react-router-dom";
// Fix inconsistent import paths
import Homepage from "./Homepage";
import About from "./Main/About/AboutUs";  // Updated to match actual file name
import Booking from "./Main/Booking/BookingPage";
import Order from "./Main/Order/Order";
import Login from "./Main/Login/Login";
import Confirmation from "./Main/Reserve/Confirmation";
import NotFound from "./Main/NotFound";  // Add 404 page

export default function Routing() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Booking />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />

      {/* 404 route - must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}