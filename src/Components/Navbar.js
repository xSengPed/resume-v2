import React from 'react'
import { Layout, Menu  } from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGitlab , faFacebook ,faInstagram ,faMedium} from '@fortawesome/fontawesome-free-brands'

const { Header } = Layout;
class NavBar extends React.Component {
    
    render() {
        return(
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}>
                
                <Menu.Item key="1">Facebook<a href="https://www.facebook.com/phone.dnk"></a></Menu.Item>
                <Menu.Item key="2">Instagram<a href="https://www.instagram.com/Iphone.coepk"></a></Menu.Item>
                <Menu.Item key="3">GitLab<a href="https://gitlab.com/kalima007c"></a></Menu.Item>
                <Menu.Item key="4">Medium<a href="https://medium.com/@dev.dnk"></a></Menu.Item>
              </Menu>
            </Header>
          </Layout>
        )
    }
}

export default NavBar