import { Routes, Route } from "react-router-dom";
// Fix inconsistent import paths
import Homepage from "./Pages/Homepage";
import About from "./Pages/AboutUs";  // Updated to match actual file name
import Booking from "./Pages/BookingPage";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import Confirmation from "./Pages/Confirmation";
import NotFound from "./Pages/NotFound";  // Add 404 page

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