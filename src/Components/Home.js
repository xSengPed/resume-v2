import React from 'react'
import {Container} from 'reactstrap'
import {Avatar} from 'antd'
import {Bio,Skill} from "./Bio";
import './style.css'
import MyTimeline from "./MyTimeline";
import Repository from "./Repository"
import ScrollAnimation from 'react-animate-on-scroll';

const Name = {
    fontSize : "28px",
    paddingTop : "10px"
}
const Home = () => {
    return (
        
            <Container className="card-container-2">
            <ScrollAnimation animateIn="fadeIn">
            <Container className="item-center">
                <div><Avatar size={200} src="http://graph.facebook.com/100000337503807/picture?type=large"></Avatar></div>
                <br/>
                <div style={Name}>Donnukrit Satirakul (Phone)</div>
            </Container>
            </ScrollAnimation>
            
            <Container>
            <ScrollAnimation animateIn="fadeIn"><Bio/></ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn"><Skill/></ScrollAnimation>
            </Container>
            <ScrollAnimation animateIn="fadeIn"><MyTimeline/></ScrollAnimation>
            <Repository/>  
             
        </Container>
        
    )
}

export default Home