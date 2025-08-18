import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Beginner-friendly Booking form
// Props:
// - availableTimes: array of strings like ['17:00', '17:30']
// - updateTimes: function(date) -> updates availableTimes in parent
function BookingForm({ availableTimes = [], updateTimes = () => {} }) {
  const navigate = useNavigate();

  // Single state object for all fields (easier for beginners)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: availableTimes[0] || "",
    occasion: "None",
    seating: "None",
    comments: ""
  });

  // Simple error state (field -> message)
  const [errors, setErrors] = useState({});

  // Generic change handler for inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  // When date changes, inform parent so availableTimes can update
  function handleDateChange(e) {
    const newDate = e.target.value;
    setForm(prev => ({ ...prev, date: newDate }));
    // Tell parent component about the date change
    updateTimes(new Date(newDate));
  }

  // Simple validation before submit
  function validate() {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    // basic email check
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.date) newErrors.date = "Select a date";
    if (!form.time) newErrors.time = "Select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // In a real app you'd submit to an API. Here we just navigate.
    navigate("/confirmation", { state: { booking: form } });
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>Book Now</h2>

      <label>First name *</label>
      <input name="firstName" value={form.firstName} onChange={handleChange} />
      {errors.firstName && <div className="error">{errors.firstName}</div>}

      <label>Last name *</label>
      <input name="lastName" value={form.lastName} onChange={handleChange} />
      {errors.lastName && <div className="error">{errors.lastName}</div>}

      <label>Email *</label>
      <input name="email" type="email" value={form.email} onChange={handleChange} />
      {errors.email && <div className="error">{errors.email}</div>}

      <label>Phone</label>
      <input name="phone" value={form.phone} onChange={handleChange} />

      <label>Guests</label>
      <input name="guests" type="number" min="1" max="20" value={form.guests} onChange={handleChange} />

      <label>Date *</label>
      <input name="date" type="date" value={form.date} onChange={handleDateChange} />
      {errors.date && <div className="error">{errors.date}</div>}

      <label>Time *</label>
      <select name="time" value={form.time} onChange={handleChange}>
        <option value="">-- pick a time --</option>
        {availableTimes.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && <div className="error">{errors.time}</div>}

      <label>Occasion</label>
      <select name="occasion" value={form.occasion} onChange={handleChange}>
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <label>Seating</label>
      <select name="seating" value={form.seating} onChange={handleChange}>
        <option>None</option>
        <option>Indoor</option>
        <option>Outdoor</option>
      </select>

      <label>Comments</label>
      <textarea name="comments" value={form.comments} onChange={handleChange} />

      <div style={{ marginTop: 12 }}>
        <button type="submit">Book Table</button>
      </div>
    </form>
  );
}

export default BookingForm;
