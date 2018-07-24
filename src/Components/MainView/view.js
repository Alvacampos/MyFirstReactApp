import React from 'react';
import classes from './view.css';

const View = (props) =>{
  return(   
      <nav className={classes.navBar}>
        <button onClick={props.home} type="button" className='btn btn-primary'>Home</button>
        <button onClick={props.cv} className='btn btn-primary'>Cv</button>
        <a href="https://www.linkedin.com/in/gonzaloalvarezcampos/" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary'>LinkedIn</button></a>
        <button onClick={props.info} className='btn btn-primary'>Contact Info</button>
        <button className='btn btn-primary'>Your Contact Info</button>
        <button onClick={props.array} className='btn btn-primary'>Array Test</button>
      </nav>   
    );
}

export default View;