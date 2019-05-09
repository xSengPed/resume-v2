import React from 'react'
import {Divider,Row,Col} from 'antd'
import {Container} from "reactstrap"
import './css/style.css'

const iconResponsive = {
    fontSize: "4.5vw",
    display : "flex",
    justifyContent : "space-around",
    justifyItems : "center"
} 
const fontResponsive = {
    fontSize: "1.25vw",
} 

class MyWebApp extends React.Component {
    render() {
        return (
           
                <Container>
                    <Divider>
                        <div className="head">My Web Application</div>
                    </Divider>
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
                                        <div>
                                            <i class="fas fa-calculator" style={iconResponsive}></i>
                                            <p style={fontResponsive}>CalGrade</p>
                                        </div>      
                                </Col>
                            </Row>
                </Container> 
        )
    }
}
export default MyWebApp