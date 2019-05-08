import React from 'react'
//import { parse } from 'url';
import {Container} from 'reactstrap'
import {Input,Button,Row,Col,Divider} from 'antd'
import '../style.css'


const inputWidth = {
    width:"200px"
} 
class Calculator extends React.Component {
    
    constructor(props) {
    super(props)
        this.State = {C:'',F:''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onChange(e.targey.value)
    }

   
    render(){
        
        return (
           <Container className="card-container">
           <h1>Under Construction ....</h1>
            <div>
                <Divider>Temperature Converter</Divider>
                <Container style={inputWidth}>
                C
                  <Input onChange={this.handleChange}/>
                F
                  <Input/>
                  <Button type="primary" onClick={this.handleConvert}>Convert</Button>
                </Container>   
            </div>
           </Container>
        )
    }
    
}

const convert_CtoF = (Celcius) => {
    return (Celcius * 1.8) + 32
}
const convert_FtoC = (Farenheit) => {
    var result = (Farenheit - 32) * 1.8
    return result
}

export default Calculator