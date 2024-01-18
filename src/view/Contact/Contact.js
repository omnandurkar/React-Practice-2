import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default function Contact() {

  const [count, setCount] = useState(1);

  const dec = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const inc = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const reset = () => {
    setCount(1);

  };

  return (

    
    <center >
      <Navbar/>
      <h1>This is Counter</h1>
      <div className="container m-auto mt-5 h-50 center">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title ">{count}</h3>
              <p className="card-text">Value increases as You Increase and Decreases as you Decrease</p>
              <a onClick={(dec)} className="btn btn-primary  mt-2 ">Decrease</a>
              <a onClick={(inc)} className="btn btn-warning mx-5 mt-2 ">Increase</a>
              <a onClick={(reset)} className="btn btn-danger  mt-2 ">Reset</a>
            </div>
          </div>
        </div>
      </div>

    </center>
  )
}
