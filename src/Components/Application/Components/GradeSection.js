import React from 'react'
import {Select,Col,Row,InputNumber, Alert ,Divider} from 'antd'
import {Container} from 'reactstrap'
import '../css/appCal.css'

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

    calgpa = () =>{
      const temp =  this.state.gpac/this.state.c;
      this.setState({gpa:temp.toFixed(2)})
    }
    handleChangec = (value) => {
      this.setState({ c: value}, () => {
        this.loadData(value)
      })
    }
    handleChangegpac = (value) => {
      this.setState({ gpac: value}, () => {
        this.loadData(value)
      })
      
    }
    one = (value) => {
      this.setState({ a: value},()=>{
        this.loadData(value)
      })
    }
    two = (value) => {
      this.setState({ b: value},()=>{
        this.loadData(value)
        this.three()
      })
    }
    three = () => {
      const temp =  this.state.b*this.state.a;
      var credit = +this.state.a + +this.state.c
      var point= +temp + +this.state.gpac
      this.setState({ 
        gpac: point,
        c :credit
      }, () => this.calgpa())
    }
    render(){
        const Option = Select.Option;

         let rows = []
        for(let i = 0 ; i < 10 ; i++)
        {
            rows.push (
                 <Row style={{paddingBottom:"10px",paddingTop:"10px",textAlign:"center"}}>
                    <Col span={8}>{'0'+(i+1)}</Col>
                    <Col span={8}>
                        <Select style={{width:"75px"}} onChange = {this.one.bind(this)} defaultValue = "0">
                            <Option value = "0">0</Option>
                            <Option value = "1">1</Option>
                            <Option value = "2">2</Option>
                            <Option value = "3">3</Option>
                            <Option value = "4">4</Option>
                        </Select></Col>
                    <Col span={8}>
                        <Select style={{width:"75px"}} onChange = {this.two.bind(this)} defaultValue = "-">
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
          <Container>
            <Divider><div style = {{fontSize:"3vw",paddingTop:"20px"}} className="app-header"><i>Grade Prediction System</i></div></Divider>
          <Row style={{textAlign:"center",paddingTop:"20px"}}>
            <Col span={8}>No.</Col>
            <Col span={8}>Credit</Col>
            <Col span={8}>Grade</Col>
          </Row>
                {rows}
                <div>
                  <div>CUMULATIVE CREDITS : {}<InputNumber min = {0} onChange={this.handleChangec} defaultValue={37}/></div>
                  <div>CUMULATIVE GRADE POINT AVERAGE CREDITS : {}<InputNumber min = {0} onChange={this.handleChangegpac} defaultValue={112}/></div>
                </div>             
                <div style={{textAlign:"center" ,paddingTop:"10px",paddingBottom:"10px"}}>
                    <Alert type="success" message={'CUMULATIVE GRADE POINT AVERAGE : '+ +this.state.gpa}/>
                </div>
                <div style={{textAlign:"center"}}>
                  <Alert type="info" message = "Special Thank : airx.me (Back-End)"/>
                </div>
          </Container>
        )
    }
}
export default GradeSection 



