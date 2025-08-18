import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: 40 }}>
      <h1>404 - Page not found</h1>
      <p>The page you requested could not be found.</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}
