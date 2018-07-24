import React, { PureComponent } from 'react';
import View from '../Components/MainView/view';
import Home from '../Components/Home/home.jsx';
import Cv from '../Components/Cv/cv';
import Skillbar from '../Components/Cv/skillBar.jsx';
import Info from '../Components/Info/info';
import Persons from '../Components/Persons/Persons';
import Clock from '../Components/Clock/clock';
import WithClass from '../HoC/WithClass';
import classes from './App.css';

class App extends PureComponent {  
  state = {
    persons: [
      {
        id: '15345', name: 'Pepito', age: '12'
      },
      {
        id: '24356', name: 'Mr.Burn', age: '?'
      },
      {
        id: '54364', name: 'Barnie', age: '37'
      }
    ],
    showPersons: false,
    showHome: true,
    showCv: false,
    showSkills: false,
    showInfo: false,       
  }
  /*Two way binding, dynamic input for array of persons*/
  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person ={
      ...this.state.persons[personIndex]
    };
    person.name=event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  ageChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person ={
      ...this.state.persons[personIndex]
    };
    person.age=event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }
  /**Adds a person to the array*/
  addPerson = () =>{
    const persons=[...this.state.persons];
    persons.push({id:Math.floor(Math.random()*99999), name: window.prompt('name'), age:window.prompt('age')});
    this.setState({persons: persons});
  }  

  /*Deletes a person from the array*/
  deletePersonHandler = (personIndex) =>{
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  } 

  toggleHome = () =>{
    const cvOn = false;
    const homeOn = true;
    const skillOn = false;
    const doesShow = false;
    const infoOn = false;
    const robotOn = false;
    this.setState({showRobot: robotOn});
    this.setState({showHome: homeOn});
    this.setState({showCv: cvOn});      
    this.setState({showSkills: skillOn});
    this.setState({showPersons: doesShow});
    this.setState({showInfo: infoOn});    
  }

  toggleCv = () =>{
    const cvOn = true;
    const homeOn = false;
    const skillOn = false;
    const doesShow = false;
    const infoOn = false;
    const robotOn = false;
    this.setState({showRobot: robotOn});
    this.setState({showHome: homeOn});
    this.setState({showCv: cvOn});      
    this.setState({showSkills: skillOn});
    this.setState({showPersons: doesShow});
    this.setState({showInfo: infoOn});    
  }   

  toggleSkills = () =>{
    const cvOn = true;
    const homeOn = false;
    const skillOn = true;
    const doesShow = false;
    const infoOn = false;
    const robotOn = false;
    this.setState({showRobot: robotOn});
    this.setState({showHome: homeOn});
    this.setState({showCv: cvOn});      
    this.setState({showSkills: skillOn});
    this.setState({showPersons: doesShow});
    this.setState({showInfo: infoOn});
  }

  toggleInfo = () =>{
    const cvOn = false;
    const homeOn = false;
    const skillOn = false;
    const doesShow = false;
    const infoOn = true;
    const robotOn = false;
    this.setState({showRobot: robotOn});
    this.setState({showHome: homeOn});
    this.setState({showCv: cvOn});      
    this.setState({showSkills: skillOn});
    this.setState({showPersons: doesShow});
    this.setState({showInfo: infoOn});
  }
    /*Toggle Array of persons*/
  toggleHandler = () =>{
    const cvOn = false;
    const homeOn = false;
    const skillOn = false;
    const doesShow = true;
    const infoOn = false;
    const robotOn = false;
    this.setState({showRobot: robotOn});
    this.setState({showHome: homeOn});
    this.setState({showCv: cvOn});      
    this.setState({showSkills: skillOn});
    this.setState({showPersons: doesShow});
    this.setState({showInfo: infoOn});
  }

  toggleRobot = () =>{
    const cvOn = false;
    const homeOn = false;
    const skillOn = false;
    const doesShow = false;
    const infoOn = false;
    const robotOn = true;
    this.setState({showRobot: robotOn});
    this.setState({showHome: homeOn});
    this.setState({showCv: cvOn});      
    this.setState({showSkills: skillOn});
    this.setState({showPersons: doesShow});
    this.setState({showInfo: infoOn});
  }

  render() {
    /* Styling*/    
    const assingnedclasses=[];
    if(this.state.persons.length <= 2){
      assingnedclasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assingnedclasses.push(classes.bold);
    }
    /*-------------*/

    /*Render logic*/
    let home = null;
    let boxes = null;
    let cv = null;
    let skills = null;
    let info = null
    let robot = null;
    if(this.state.showPersons){
      boxes = (
        <div>
          <h3 className={assingnedclasses.join(' ')}>Array of Persons</h3>
          <Persons 
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            changedAge={this.ageChangedHandler}
            delete={this.deletePersonHandler}/>          
          <hr/>
          <button className="btn btn-success" onClick={this.addPerson}>Add Item</button>                               
        </div>
      );      
    }    
    if(this.state.showHome){
      home=(
        <Home/> 
      );      
    }    
    if(this.state.showCv){
      cv=(
        <div>
          <Cv/> 
          <br/>
          <button type="button" className="btn btn-success" onClick={this.toggleSkills}>Skills</button>                      
        </div>
      );      
    }
    if(this.state.showSkills){
      skills=(       
        <Skillbar/>       
      );
    }
    if(this.state.showInfo)
      info=<Info/>   
    /* ------------- */

    return (
      <WithClass classes={classes.App}> 
        <View home={this.toggleHome} cv={this.toggleCv} info={this.toggleInfo} array={this.toggleHandler} robot={this.toggleRobot}/>       
        {home}        
        {cv}
        {skills} 
        {info}             
        {boxes}
        {robot}               
        <footer>
          <hr/>
          <p>Gonzalo Alvarez Campos - 2018</p>
          <Clock/>
        </footer>
      </WithClass>
    );
  }
}

export default App;
