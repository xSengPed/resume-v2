import React from 'react';
import Home from './Components/Home'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
const HomePadding = {
  paddingTop: "5%"
}
  return (
    <div>
    <div>
      <NavBar/>
    </div>
      <div style={HomePadding}>
        <Home/>
        
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
