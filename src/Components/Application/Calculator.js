import React from 'react'
import {Container} from 'reactstrap'
import GradeSection from './Components/GradeSection'
import {Tabs} from 'antd'
import './css/appCal.css'


function callback(key) {
    console.log(key);
  }
  
class Calculator extends React.Component {
    render(){
        const TabPane = Tabs.TabPane;
        return(
            <Container className = "card-container">
                <GradeSection/>
            </Container>
        )
    }
}
export default Calculator