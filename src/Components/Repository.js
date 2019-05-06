import React from 'react'
import {Divider,Button} from 'antd'
import {Container} from "reactstrap"
import './style.css'
import ScrollAnimation from 'react-animate-on-scroll';

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
                        <div>Coming Soon ....</div>
                    </Container>
                </Container>
                </ScrollAnimation>
            </Container>
        )
    }
}

export default Repository