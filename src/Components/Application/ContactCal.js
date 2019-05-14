import React from 'react'
import {InputNumber,Button,Row,Col,Alert,Divider} from 'antd'
import {Container} from 'reactstrap'
import './css/appCal.css'
class ContactCal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Start_Price : '',
            Full_Price : '',
            PRE_PAID : '',
            M_Discount : '',
            Contact : '',
            Month_PAID : '',
            result : '',
            diff : 0
        }
    }
    loadData = async() => {}
    onChangeStartPrice = (value) => {
        this.setState({Start_Price : value},() => {
            this.loadData(value)
        })
    }
    onChangeFullPrice = (value) => {
        this.setState({Full_Price : value},() => {
            this.loadData(value)
        })
    }
    onChangePrePaid = (value) => {
        this.setState({PRE_PAID : value},() => {
            this.loadData(value)
        })
    }
    onChangeDiscount = (value) => {
        this.setState({M_Discount : value},() => {
            this.loadData(value)
        })
    }
    onChangeContact = (value) => {
        this.setState({Contact : value},() => {
            this.loadData(value)
        })
    }
    onChangeMonthlyPaid = (value) => {
        this.setState({Month_PAID : value},() => {
            this.loadData(value)
        })
    }

    handleOnClick = (event) => {
        let {Start_Price,PRE_PAID,M_Discount,Contact,Month_PAID} = this.state
        this.calculateValue(Start_Price,PRE_PAID,M_Discount,Contact,Month_PAID);
    }
    calculateValue = (SP,PP,Md,C,MP) => {
        var temp1 = (SP+PP)+((MP-Md)*C)
        var temp2 = temp1 - this.state.Full_Price
        this.setState({
            result : temp1,
            diff : temp2
        })
    }
    render(){
        return(
            <Container className="box">
            <Divider><div className="centered">คำนวนราคาสมาร์ทโฟน</div></Divider>
                <Container className="calBox">
                <Row>
                    <Col span = {12}>ราคาเต็ม</Col>
                    <Col span = {12}><InputNumber min = {0} onChange = {this.onChangeFullPrice}/></Col>
                </Row>
                <Row>
                    <Col span = {12}>ราคาเริ่มต้น</Col>
                    <Col span = {12}><InputNumber min = {0} onChange = {this.onChangeStartPrice}/></Col>
                </Row>
                <Row>
                    <Col span = {12}>จ่ายล่วงหน้า</Col>
                    <Col span = {12}> <InputNumber min = {0} onChange = {this.onChangePrePaid}/></Col>
                </Row>
                <Row>
                    <Col span = {12}>ส่วนลดรายเดือน</Col>
                    <Col span = {12}><InputNumber min = {0} onChange = {this.onChangeDiscount}/></Col>
                </Row>
                <Row>
                    <Col span = {12}>ค่าใช้จ่ายรายเดือน</Col>
                    <Col span = {12}><InputNumber min = {0} onChange = {this.onChangeMonthlyPaid}/></Col>
                </Row>
                <Row>
                    <Col span = {12}>สัญญา (1-12 เดือน)</Col>
                    <Col span = {12}><InputNumber min = {1} max = {12} defaultValue={1} onChange = {this.onChangeContact} /></Col>
                </Row>
                
            </Container>
                <div className="centered">
                    <Button type = "primary" onClick={this.handleOnClick} >คำนวน</Button>
                </div>
                <div className="centered2">
                    <Alert type="success" message={'ราคารวมทั้งหมด (ไม่รวม Vat 7%) : '+ +this.state.result}/> 
                </div>
               <div className="centered2">
                    <Alert type="error" message={'ผลต่างราคาเต็มกับติดสัญญา : '+this.state.diff}/>
               </div>
            </Container>
        )
    }
}
export default ContactCal