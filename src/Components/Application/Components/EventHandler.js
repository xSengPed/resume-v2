<Row style={{padding:"10px"}}>
                    <Col span={4}>Subject</Col>
                    <Col span={4}>{'0'+(i+1)}</Col>
                    <Col span={4}>Unit</Col>
                    <Col span={4}>
                        <Select style={{width:"75px"}} onChange = {this.a}>
                            <Option value = "0">0</Option>
                            <Option value = "1">1</Option>
                            <Option value = "2">2</Option>
                            <Option value = "3">3</Option>
                            <Option value = "4">4</Option>
                        </Select></Col>
                    <Col span={4}>Grade</Col>
                    <Col span={4}>
                        <Select style={{width:"75px"}} onChange = {this.b}>
                            <Option value = "4">A</Option>
                            <Option value = "3.5">B+</Option>
                            <Option value = "3"</Option>
                            <Option value = "2.5">C+</Option>
                            <Option value = "2">C</Option>
                            <Option value = "1.5">D+</Option>
                            <Option value = "1">D</Option>
                            <Option value = "0">E</Option>
                        </Select></Col>
                </Row>