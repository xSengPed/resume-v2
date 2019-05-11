import React from 'react'
import {Container} from 'reactstrap'
import GradeSection from './Components/GradeSection'
import './css/appCal.css'

class Calculator extends React.Component {
    render(){
        return(
            <Container className = "box-container">
                <div>Grade Cal</div>
                <div className="centered"><GradeSection /></div>
            </Container>
        )
    }
}
export default Calculator