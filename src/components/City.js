import React from 'react';
import './City.css';

const City = ( props ) => (
  <button className="City" onClick={() => props.updateCityIdState(props.cityId)}>
    {props.name}
  </button>
);

export default City;