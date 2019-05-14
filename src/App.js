import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import {Menu,Layout} from 'antd'
import Calculator from './Components/Application/Calculator'
import TempConvert from './Components/Application/TempConvert'
import ContactCal from './Components/Application/ContactCal'
import './App.css'

const Main = () => <Home/>
const MyAppGrade = () => <Calculator/>
const TempConverter = () => <TempConvert/>
const CalContact = () => <ContactCal/>
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
        <Menu.Item key="2"><a href="https://gitlab.com/kalima007c">GitLab</a></Menu.Item>
        <Menu.Item key="3"><a href="https://www.instagram.com/Iphone.coepk">Instagram</a></Menu.Item>
        <Menu.Item key="4"><a href="https://medium.com/@dev.dnk">Medium</a></Menu.Item>
        

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Route exact path ="/" component={Main}/>
      <Route exact path = "/appgrade" component = {MyAppGrade}/> 
      <Route exact path = "/tempconvert" component = {TempConverter}/> 
      <Route exact path = "/contact-cal" component = {CalContact}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}
export default App;

