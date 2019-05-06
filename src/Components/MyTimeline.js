import React from 'react'
import {Timeline,Divider} from 'antd'
import {Container} from 'reactstrap'
import './style.css'

const MyTimeline = () => {
    return (
        
        <Container>
            <div><Divider orientation="left"><div className="head">Academic</div></Divider></div>
            <div>
                <Timeline pending="Recording ...">
                    <Timeline.Item color="green">High School
                        <p>Pakphanang School</p>
                    </Timeline.Item>
                    <Timeline.Item color="blue">University
                        <p>Faculty of Engineering Prince of Songkhla University</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        </Container>
    )
}

export default MyTimeline;
