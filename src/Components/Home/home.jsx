import React from 'react';
import classes from './home.css';
import ArticleEN from './articleEN';
import ArticleSP from './articleSP';

const Home = () =>{
  return(
    <div className={classes.main}>
      <h1>My Web Site powered by React</h1>
      <hr className={classes.line}/>
      <blockquote>
        <p>"Technology, like art, is a soaring exercise of the human imagination"</p>
        <footer>Daniel Bell</footer>
      </blockquote>
      <hr className={classes.line2}/>
      <div className={classes.wrapper}>
        <ArticleEN/>
        <br/>
        <ArticleSP/>
      </div>      
    </div>
    )
}

export default Home;