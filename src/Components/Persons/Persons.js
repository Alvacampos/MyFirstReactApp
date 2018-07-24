import React, {PureComponent} from 'react';
import Box from './Box/Box';

class Persons extends PureComponent {
  render(){
    return this.props.persons.map((person,index) => {
      return(
        <div key= {person.id}>
          <Box 
            id={person.id}
            name={person.name}
            age={person.age}              
            changed={(event) => this.props.changed(event, person.id)}
            changedAge={(event) => this.props.changedAge(event, person.id)}/> 
          <button className="btn btn-danger" onClick={() => this.props.delete(index)}>Delete Item</button>
        </div>
      )  
    });
  }
}

export default Persons;
  