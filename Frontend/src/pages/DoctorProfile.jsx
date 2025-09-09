// Doctor Profile Page
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar.jsx';

const DrProfileEdit = () => {
 const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/doctor/profile')
      .then(res => res.json())
      .then(data => setDoctor(data))
      .catch(err => console.error('Error fetching doctor:', err));
  }, []);

  if (!doctor) return <div class="text-center mt-4 fw-bold"> Now Loading...</div>;

  return (
    <div className="DrProfile">
      <div className="card">
        <img src={doctor.image} alt={doctor.name} />
        <h2>{doctor.name}</h2>
        <p><strong>Specialty:</strong> {doctor.role}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Phone:</strong> {doctor.phone}</p>
      </div>
    </div>
  );
};

export default DrProfileEdit;


