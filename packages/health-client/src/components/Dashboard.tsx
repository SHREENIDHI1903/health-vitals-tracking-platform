import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMessage(res.data); // Assuming backend returns a string like "Welcome, user 64b..."
      } catch (err: any) {
        setMessage('Access denied: ' + (err.response?.data?.message || 'Unknown error'));
      }
    };

    fetchProtectedData();
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
