import React from 'react'
import {Container} from 'reactstrap'
import GradeSection from './Components/GradeSection'
import './css/appCal.css'
  
class Calculator extends React.Component {
    render(){
        
        return(
            <Container className = "card-container">
                <GradeSection/>
            </Container>
        )
    }
}
export default Calculator