import React from 'react';
import classes from'./skillBar.css';
import WithClass from '../../HoC/WithClass';

const CvSP = () =>{
  return(
    <WithClass classes={classes.info}>
      <article>
        <h2>Experiencia Laboral</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci obcaecati tempore tempora minus aspernatur numquam repellat quasi optio quis dolore. Quis ullam aperiam quos libero fuga dignissimos asperiores iste reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nesciunt minima, natus cumque at tenetur, 
        omnis facilis quae aperiam rerum, sed voluptate culpa vero nam placeat. Deleniti nemo quos, minus?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, reprehenderit illo distinctio nulla, sed repellendus iusto expedita obcaecati nisi sapiente ut asperiores fugiat quae quasi nobis tenetur iure commodi non.
        </p>
      </article>
    </WithClass>
    )
}

export default CvSP;