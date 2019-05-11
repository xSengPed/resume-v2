import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Calculator from './Components/Application/Calculator'
import NavBar from './Components/Navbar'
import {Fade} from 'reactstrap'
import Footer from './Components/Footer';

const Main = () => <Home/>
const MyApp = () => <Calculator/>

const App = () => {
  return (
      <div> 
        <Fade><NavBar/></Fade>
        <Route exact path="/"component={Main}/>
        <Route exact path="/app" component={MyApp}/>
        <Footer/>
      </div>
  )
}
export default App;

