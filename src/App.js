import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Calculator from './Components/Application/Calculator'
import Footer from './Components/Footer';
import TempConvert from './Components/Application/TempConvert'

const Main = () => <Home/>
const MyAppGrade = () => <Calculator/>
const TempConverter = () => <TempConvert/>

const App = () => {
  return (
      <div> 
        
        <Route exact path="/"component={Main}/>
        <Route exact path="/appgrade" component={MyAppGrade}/>
        <Route exact path="/tempconvert" component={TempConverter}/>
        <Footer/>
      </div>
  )
}
export default App;

