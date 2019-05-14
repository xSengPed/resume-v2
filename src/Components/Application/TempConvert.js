import React from 'react'
import { Container } from 'reactstrap'
import { InputNumber, Row, Col ,Divider} from 'antd'
import './css/appCal.css'
class TempConvert extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Farenheit : 0,
            Celcius : 0,
        }
    }
    loadData =  async() => {

    }

    handleChangeF = (value) => {
        this.setState({Farenheit : value},() => {
            this.loadData(value)
            console.log('F Changed : '+this.state.Farenheit)
            this.FtoC(this.state.Farenheit)
        })
        
    }
    handleChangeC = (value) => {
        this.setState({Celcius : value},() => {
            this.loadData(value)
            console.log('C Changed : '+this.state.Celcius)
            this.CtoF(this.state.Celcius)
        })
          
    }
    FtoC = (F) => {
            let temp = (F - 32) / 1.8
            console.log('FtoC Temp is '+temp)
            this.setState({Celcius : temp.toFixed(2)},()=>{
                this.loadData(temp)
            })
    }
    CtoF = (C) => {
            let temp = (C * 1.8) + 32
            console.log('CtoF Temp is '+temp)
            this.setState({Farenheit : temp.toFixed(2)},() => {
                this.loadData(temp)
            })
    }

    render() {
       
        return (
            <Container>
                <Divider><div className="app-header">Temperature Converter</div></Divider>
                <Container style={{paddingTop: "20px", paddingBottom:"50px" }}>
                    <div style={{ textAlign: "center" }}>
                        <Row style={{paddingBottom:"10px"}}>
                            <Col span={12}>Farenheit : </Col>
                            <Col span={12}><InputNumber value={this.state.Farenheit} onChange={this.handleChangeF.bind(this)}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}>Celcius : </Col>
                            <Col span={12}><InputNumber value={this.state.Celcius} onChange={this.handleChangeC.bind(this)}/></Col>
                        </Row>
                        <div>
                        </div>
                    </div>
                </Container>
            </Container>
        )
    }
}
export default TempConvert