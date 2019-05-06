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
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><FontAwesomeIcon icon={faFacebook} size="2x"/><a href="https://www.facebook.com/phone.dnk"></a></Menu.Item>
                <Menu.Item key="2"><FontAwesomeIcon icon={faInstagram} size="2x"/><a href="https://www.instagram.com/Iphone.coepk"></a></Menu.Item>
                <Menu.Item key="3"><FontAwesomeIcon icon={faGitlab} size="2x"/><a href="https://gitlab.com/kalima007c"></a></Menu.Item>
                <Menu.Item key="4"><FontAwesomeIcon icon={faMedium} size="2x"/><a href="https://medium.com/@dev.dnk"></a></Menu.Item>
              </Menu>
            </Header>
          
          </Layout>
        )
    }
}

export default NavBar