import React from 'react';
import loader from '../images/gps.svg';
import '../styles/Spinner.css';

export function Spinner(props) {
  return (
    <div className="Spinner">
      <h4>Loading...</h4>
      <img src={loader} className="Spinner__img" alt="loading icon" />
    </div>
  );
}