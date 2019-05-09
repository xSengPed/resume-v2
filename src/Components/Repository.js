import React from 'react'
import {Divider,Button} from 'antd'
import {Container} from "reactstrap"
import './css/style.css'

const fontResponsive = {
    fontSize: "1.25vw",
    
} 

class Repository extends React.Component {

    render() {
        return (
            <Container>               
                    <Divider>
                        <div className="head">My Repository</div>
                    </Divider>
                    <Container >
                        <Button style={fontResponsive} type="link" block href="https://gitlab.com/kalima007c/lab-oop" >Object Orient Programing</Button>
                        <Button style={fontResponsive} type="link" block href="https://gitlab.com/kalima007c/lab-adv-ii-django-framework" >Django Framework</Button>
                        <Button style={fontResponsive} type="link" block >Flutter Framework</Button>
                        <Button style={fontResponsive} type="link" block href="https://gitlab.com/kalima007c/reactbulma-myresume" >React.js</Button>
                    </Container>  
            </Container>
        )
    }
}

export default Repository