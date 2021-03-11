import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Adduser from './components/Adduser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import Login from './components/Login';



function App() {
  return (
    //<Login></Login>
    
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path ="/" component={Login}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={Adduser}/>
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={ViewUser} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;