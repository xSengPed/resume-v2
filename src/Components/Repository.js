import React from 'react'
import {Divider,Button,Row,Col} from 'antd'
import {Container} from "reactstrap"
import './style.css'
import ScrollAnimation from 'react-animate-on-scroll';


const iconResponsive = {
    fontSize: "4.5vw",
    display : "flex",
    justifyContent : "space-around",
    justifyItems : "center"
} 
const fontResponsive = {
    fontSize: "1.25vw",
} 


class Repository extends React.Component {
    render(){
        return (
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <Divider><div className="head">My Repository</div></Divider>
                    <Container className="repo-flex">
                        <Button type="link" href="https://gitlab.com/kalima007c/lab-oop" block>Object Orient Programing</Button>
                        <Button type="link" href="https://gitlab.com/kalima007c/lab-adv-ii-django-framework" block>Django Framework</Button>
                        <Button type="link" block>Flutter Framework</Button>
                        <Button type="link" href="https://gitlab.com/kalima007c/reactbulma-myresume" block>React.js</Button>
                    </Container>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn">
                <Container>
                    <Divider><div className="head">My Web Application</div></Divider>
                    <Container>   
                            <Row style={{textAlign:"center"}}>
                                <Col span={12}>
                                 <a href="app">
                                    <div>
                                        <i class="fas fa-thermometer-half" style={iconResponsive}></i>
                                        <p style={fontResponsive}>TempConvert</p>
                                    </div>
                                </a>
                                </Col>
                                <Col span={12}>
                                <i class="fas fa-calculator" style={iconResponsive}></i>
                                <p style={fontResponsive}>CalGrade</p>
                                </Col>
                            </Row>
        
                    </Container>
                </Container>
                </ScrollAnimation>
            </Container>
        )
    }
}

export default Repository