import React from 'react';
import Home from './Home'

import Footer from './Footer'



function HomeRender() {
const HomePadding = {
  paddingTop: "5%"
}
  return (
    <div>
    <div>
    </div>
      <div style={HomePadding}>
        <Home/>
      </div>  
      <Footer/>
    </div>
  );
}

export default HomeRender

