import React from 'react'
import {Container} from 'reactstrap'
import {Avatar} from 'antd'
import {Bio,Skill} from "./Bio";
import './style.css'
import MyTimeline from "./MyTimeline";
import Repository from "./Repository"

const Name = {
    fontSize : "28px",
    paddingTop : "10px"
}
const Home = () => {
    return (
        <Container className="card-container-2">
            <Container className="item-center">
                <div><Avatar size={200} src="http://graph.facebook.com/100000337503807/picture?type=large"></Avatar></div>
                <br/>
                <div style={Name}>Donnukrit Satirakul (Phone)</div>
            </Container>
            <Container>
                <div><Bio/></div>
                <div><Skill/></div>
            </Container>
                <div><MyTimeline/></div>
                <div>
                <Repository/>
                </div>
        </Container>
    )
}

export default Home