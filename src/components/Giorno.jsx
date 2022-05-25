import React from "react";
import { format } from 'date-fns'


const Giorno = ({ dataTimestamp }) => {
  
  const dateObject = new Date(dataTimestamp); 
  return (
    <div className="giorno_wrapper">giorno: {format(dateObject, 'dd/MM/yyyy')} </div>
  );
};

export default Giorno;
