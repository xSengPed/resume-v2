import React from 'react'
import { parse } from 'url';
import {Container} from 'reactstrap'
import {Input,Button,Row,Col,Divider} from 'antd'
import '../style.css'
import { text } from '@fortawesome/fontawesome-svg-core';

const inputWidth = {
    width:"200px"
} 
class Calculator extends React.Component {
    
    constructor(props) {
    super(props)
    this.state = {Celcius : '',Farenheit : ''}    
    this.handleChangeCelcius = this.handleChangeCelcius.bind(this)
    this.handleChangeFarenheit = this.handleChangeFarenheit.bind(this)

    }
    handleChangeCelcius(event) {
        this.setState({Celcius: parseFloat(event.target.value)})
        
    }
    handleChangeFarenheit(event){
        this.setState({Farenheit: parseFloat(event.target.value)})
        console.log('farenheit was change')
        console.log(this.state.Farenheit)
    }
    handleClickClear(event){
        this.setState({Celcius: ''})
        this.setState({Farenheit: parseFloat(event.target.value)})
    }
    render(){
        
        return (
           <Container className="card-container">
           <h1>Under Construction ....</h1>
            <div>
            <Divider>Temperature Converter</Divider>
                <Container style={inputWidth}>
                    <label>Celcius<Input value={this.state.Celcius} onChange = {this.handleChangeCelcius} allowClear="true"/></label><br/>
                    <label>Farenheit<Input value={this.state.Farenheit} onChange = {this.handleChangeFarenheit} alowClear="true"/></label><br/>
                    <br/>
                    <div className="centered">
                        <p><Button type="primary" block>Convert</Button></p>
                        <p><Button type="primary" onClick={this.handleClickClear} block >Clear</Button></p>
                    </div>
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