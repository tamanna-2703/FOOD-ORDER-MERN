import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useSearchParams, useNavigate } from 'react-router-dom'; // ✅ Add useNavigate
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams(); // Destructure properly
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate(); // ✅ Now defined

  const verifyPayment = async () => {
    try {
      console.log('Verifying:', { success, orderId, url }); // Debug
      const response = await axios.post(`${url}/api/order/verify`, { success, orderId }, {
        headers: { token: localStorage.getItem('token') } // Auth if needed
      });
      if (response.data.success) {
        navigate('/order');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Verify error:', error);
      navigate('/');
    }
  };

  useEffect(() => {
    if (success && orderId) { // ✅ Guard against null
      verifyPayment();
    } else {
      console.log('Missing params:', window.location.search); // Debug URL
      navigate('/');
    }
  }, [success, orderId, url, navigate]);

  return (
    <div className='verify'>
      <div className='spinner'></div>
      <p>Verifying your order...</p>
    </div>
  );
};

export default Verify;
