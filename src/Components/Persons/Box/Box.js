import React from 'react';
import boxes from './box.css';

const Box = (props) =>{
  return (
    <div className={boxes.box}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolores, eveniet. Labore amet, nesciunt quibusdam sed est. Obcaecati impedit illo molestias nemo, iusto, perspiciatis, suscipit eveniet nulla expedita cupiditate, voluptatem!        
      </p>
      <p>Id: {props.id} - Name: {props.name} - Age: {props.age}</p>      
      <input type="text" onChange={props.changed} value={props.name}/>
      <input type="text" onChange={props.changedAge} value={props.age}/>      
    </div> 
    )
}

export default Box;