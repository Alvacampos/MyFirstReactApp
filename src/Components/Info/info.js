import React from 'react';
import classes from './info.css';
import WithClass from '../../HoC/WithClass';

const Info = () =>{
  return (
    <WithClass classes={classes.wrapper}>
      <h2>Contact Information</h2>
      <div>
        <h3 >Name:</h3>
        <p>Alvarez Campos, Gonzalo</p>        
      </div>
      <div className = {classes.h3}>
        <h3>Phone Number:</h3>
        <p>+54-9-3813480565</p>
      </div>
      <div className = {classes.h3}>
        <h3>Email:</h3>
        <p>gonzaloralvarezcampos@gmail.com</p>
      </div>
      <div className = {classes.h3}>
        <h3>Alternative email:</h3>
        <p>gonzalo_trc@hotmail.com</p>
      </div>
    </WithClass>
    )
}

export default Info;