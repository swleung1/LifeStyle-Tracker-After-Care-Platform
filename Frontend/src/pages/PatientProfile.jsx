// Patient Profile Page
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar.jsx';

const PatientProfileEdit = () => {
 const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/patient/profile')
      .then(res => res.json())
      .then(data => setPatient(data))
      .catch(err => console.error('Error fetching patient:', err));
  }, []);

  if (!patient) return <div class="text-center mt-4 fw-bold"> Now Loading...</div>;

  return (
    <div className="PatientProfile">
      <div className="card">
        <img src={patient.image} alt={patient.name} />
        <h2>{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
      </div>
    </div>
  );
};

export default PatientProfileEdit;
