import React from 'react';
import classes from'./skillBar.css';
import WithClass from '../../HoC/WithClass';

const SkillBar = () =>{
  return (
    <div id={classes.bar}>
      <hr/>
      <p>HTML</p>
      <WithClass classes={classes.html}>90%</WithClass>
      <hr/>
      <p>CSS</p>
      <WithClass classes={classes.css}>70%</WithClass>    
      <hr/>
      <p>BootsTrap</p>      
      <WithClass classes={classes.boots}>70%</WithClass>      
      <hr/>
      <p>Java Scrip</p>      
      <WithClass classes={classes.js}>50%</WithClass>
      <hr/>
      <p>React</p>      
      <WithClass classes={classes.react}>40%</WithClass>      
      <hr/>
      <p>Java</p>      
      <WithClass classes={classes.java}>50%</WithClass>      
      <hr/>
      <p>Python</p>        
      <WithClass classes={classes.python}>20%</WithClass>        
      <hr/>
      <p>Netbeans</p>      
      <WithClass classes={classes.netbeans}>70%</WithClass>      
      <hr/>
      <p>SublimeText</p>
      <WithClass classes={classes.sublimetext}>70%</WithClass>      
      <hr/>
      <p>Eclipse</p>      
      <WithClass classes={classes.eclipse}>50%</WithClass>      
      <hr/>
      <p>English</p>      
      <WithClass classes={classes.english}>90%</WithClass>           
    </div>
  )
}

export default SkillBar;