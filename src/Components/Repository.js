import React from 'react'
import {Divider,Button,Row,Col} from 'antd'
import {Container} from "reactstrap"
import './style.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {faTh} from '@fortawesome/fontawesome-svg-core'

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
                                        <i class="fas fa-thermometer-half fa-5x"></i>
                                        <p>TempConvert</p>
                                    </div>
                                </a>
                                </Col>
                                <Col span={12}>
                                <i class="fas fa-calculator fa-5x"></i>
                                <p>CalGrade</p>
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