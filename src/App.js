import React, { Component } from 'react';

import ListEmployee from './Components/ListEmployee';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <div>
      <div><BrowserRouter>
                <ul>
                      <li>Crud operation</li> 
                       <li><Link to="/">Home</Link></li>
                        <li><Link to="/addemployee">Add Employee</Link></li>
                        </ul>
                        <Switch>
                      <Route exact path='/' component={ListEmployee} />
                      <Route path='/listEmployee' component={ListEmployee} /> 
                       <Route path='/addemployee' component={AddEmployee} />
                        <Route path='/editemployee/:id' component={EditEmployee} />
                      </Switch></BrowserRouter>
            </div>
     
    </div>
  );
}
}
export default App;
