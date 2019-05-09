import React from 'react'
import {Container} from 'reactstrap'
import {Bio,Skill,ProfilePicture} from "./Bio";
import TimelineComponent from "./Timeline";
import Repository from './Repository';
import MyWebApp from './MyWebApp';
import ScrollAnimation from 'react-animate-on-scroll';
import './css/style.css'

const Home = () => {
    return (
        <Container className = "card-container">
            <ScrollAnimation animateIn="fadeIn">
                <Container><ProfilePicture/></Container>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <Container><Bio/></Container> 
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeIn">
                <Container><Skill/></Container> 
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeIn">
                <Container><TimelineComponent/></Container> 
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeIn">
                <Container><Repository/></Container> 
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeIn">
                <Container><MyWebApp/></Container> 
            </ScrollAnimation>
 
        </Container>    
    )
}

export default Home