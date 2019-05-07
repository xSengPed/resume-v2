import React from 'react';
import { Route } from 'react-router-dom'
import HomeRender from './Components/HomeRender'
import Calculator from './Components/Application/Calculator'
import NavBar from './Components/Navbar'
import {Fade} from 'reactstrap'

const Main = () => <HomeRender/>
const MyApp = () => <Calculator/>



const App = () => {
  return (
      <div> 
        <Fade><NavBar/></Fade>
        <Route exact path="/" component={Main} />
        <Route exact path="/app" component={MyApp} />
      </div>
  )
}
export default App;

