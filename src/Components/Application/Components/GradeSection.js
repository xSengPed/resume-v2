import React from 'react'
import {Select,Col,Row,InputNumber} from 'antd'
import {Container} from 'reactstrap'
import '../css/appCal.css'


const inputWidth = {
    width : "150px"
}
const Padding = {
    paddingLeft : "10px"
}

const Option = Select.Option
class GradeSection extends React.Component {


    constructor(props){
        super(props)
        this.state = {
          c:'',
          gpa:'',
          gpac:'',
          a:'',
          b:'',
        };
      }
     
    loadData = async() => {
        const {a,b,c,gpa,gpac} = this.state
        
        
    }


    onChangeHandlerA = (value) => {
        this.setState({a : value},() => {
            this.loadData(value)
        })
        
    }
    onChangeHandlerB= (value) => {
     this.setState({b : value},() => {
         this.loadData(value)
     })
     
    }
    render(){
        const Option = Select.Option;

         let rows = []
        for(let i = 0 ; i < 10 ; i++)
        {
            rows.push (
                 <Row style={{padding:"10px"}}>
                    <Col span={4}>Subject</Col>
                    <Col span={4}>{'0'+(i+1)}</Col>
                    <Col span={4}>Unit</Col>
                    <Col span={4}>
                        <Select style={{width:"75px"}} onChange = {this.onChangeHandlerA.bind(this)} defaultValue = "0">
                            <Option value = "0">0</Option>
                            <Option value = "1">1</Option>
                            <Option value = "2">2</Option>
                            <Option value = "3">3</Option>
                            <Option value = "4">4</Option>
                        </Select></Col>
                    <Col span={4}>Grade</Col>
                    <Col span={4}>
                        <Select style={{width:"75px"}} onChange = {this.onChangeHandlerB} defaultValue = "4">
                            <Option value = "4">A</Option>
                            <Option value = "3.5">B+</Option>
                            <Option value = "3">B</Option>
                            <Option value = "2.5">C+</Option>
                            <Option value = "2">C</Option>
                            <Option value = "1.5">D+</Option>
                            <Option value = "1">D</Option>
                            <Option value = "0">E</Option>
                        </Select></Col>
            </Row>
            )
        }
        
       
    
        return (
          <Container className="box-container">
                {rows}             
                <div> Curr UNIT Select : 
                {this.state.a}
                {console.log("UNIT UPDATE : "+this.state.a)}
                </div>
                <div>
                    Curr GRADE Select : 
                {this.state.b}
                {console.log("GRADE UPDATE : "+this.state.b)}
                </div>
          </Container>
        )
    }
}
export default GradeSection 



