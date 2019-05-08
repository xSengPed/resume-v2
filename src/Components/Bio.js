import React from 'react'
import {Container} from 'reactstrap'
import './style.css'
import './icon-animate.css'
import {Divider,Row,Col} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faJava ,
    faHtml5 , 
    faCss3 , 
    faReact , 
    faSass ,
    faJs , 
    faVuejs ,
    faPython } from '@fortawesome/fontawesome-free-brands'

const iconResponsive = {
    fontSize: "4.5vw",
    display : "flex",
    justifyContent : "space-around",
    justifyItems : "center"
} 

const Bio = () => {
    return (
        <Container>
        <Divider orientation="left"><div className="head">My Info</div></Divider>
          <div className="content">
          <p>Date of Birth : 1 January 1997</p>
            <p>Education : Faculty of Engineering (Computer Engineering)</p>
            <p>Prince of Songkhla University Phuket Campus</p>
            <p>Major : Information Engineering</p>
            <p>Address : 117/30 Wichitsongkram St. , Kathu , Phuket , Thailand</p>
            <p>Interesting :
                <div className="interest">
                 <li>Web Develop</li>
                 <li>Mobile App</li>
                 <li>Database</li>
                </div>
            </p>
            <p>Now Focus : React , Java , JavaScript , Dart</p>
            <p>Next Focus : Golang</p>
          </div>
        </Container>
    )
}
const Skill = () => {
    return (
        <Container>
        <Divider className="head"><div className="head">Skills</div></Divider>
         <Row gutter={24}>
            <Col span={12}><Divider><div className="head">Intermediate</div></Divider>
            <Container>
                <Container>
                <div style={iconResponsive}>
                <FontAwesomeIcon icon={faJava}/>
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
                <FontAwesomeIcon icon={faSass} />
                </div>
                </Container>
            </Container>
            </Col>
            <Col span={12}><Divider ><div className="head">Basic</div></Divider>
            <Container>
                <Container>
                <div style={iconResponsive}>
                <FontAwesomeIcon icon={faReact}/>
                <FontAwesomeIcon icon={faVuejs}/>
                <FontAwesomeIcon icon={faJs}/>
                <FontAwesomeIcon icon={faPython}/>
                </div>
                </Container>
            </Container>
            </Col>
         </Row>
        </Container>
    )
}
export {Bio,Skill}