import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Icons from './Icon';
import Login from './Login';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={<Home/>}/>
      <Route path='/about' component={<About/>}/>
      <Route path='/login' component={<Login/>}/>
      <Route path='/resister' component={<Register/>}/>
      <Route path='/icon' component={<Icon/>}/>
    </Switch>
    </>
  )
}

export default App
