import React from 'react'
import {Timeline,Divider} from 'antd'
import {Container} from 'reactstrap'
import './css/style.css'

const TimelineComponent = () => {

    return (    
        <Container>
            <div>
                <Divider orientation="left">
                    <div className="head">Academic</div>
                </Divider>
            </div>
            
            <div >
                <Timeline>
                    <Timeline.Item color="green">
                        <div className="timeline-text">High School</div>
                            <p className="timeline-text">Pakphanang School</p>
                    </Timeline.Item>

                    <Timeline.Item color="blue">
                        <div className="timeline-text">University</div>
                            <p className="timeline-text">Faculty of Engineering Prince of Songkhla University</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        </Container>
    )
}

export default TimelineComponent;
