import React from 'react';
import classes from './home.css';

const ArticleEN = () =>{
  return(
    <div className={classes.info}>
      <h2>A little about me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, officia, odio! Sequi harum eveniet, quam error veritatis nostrum architecto aperiam placeat fugiat omnis consequatur, adipisci sunt perferendis reprehenderit incidunt suscipit!</p>
      <br/>
      <div>
        <hr className={classes.line}/>
        <h4>Hobbies:</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestiae incidunt temporibus reiciendis maxime neque quis id delectus iste accusamus necessitatibus voluptatem ipsam, facere quo reprehenderit omnis eum officia expedita.</p>
      </div>
    </div>
  )
}

export default ArticleEN;