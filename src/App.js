import React, { Component } from 'react';
import './App.css';
import 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Avatar, Badge, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const Card = (props) => {
  return (
    <div className='flex-column flex-jc bg-white mrgn-10 pad-10 border-radius-10' style={{ width: '300px', height: '280px' }}>
      <div className='flex-row flex-ac no-shadow'>
        <div className='pad-10 no-shadow'><Avatar size={64} icon='user'
         src="https://i.ibb.co/hVjYnj1/ben10.png" alt="ben10">
         </Avatar></div>
        <div className='pad-10 font-md no-shadow'>
          <span className='font-bold no-shadow'>{props.title}</span><br/>
          <span className='no-shadow' style={{color: '#4A4A4A'}}>from &#8377;{props.cost}</span>
        </div>
      </div>
      <div className='font-sm pad-10 no-shadow font-green'>
        {props.details}
      </div>
      <div className='pad-10 no-shadow'><Button className='no-shadow font-green' type='normal' style={{width: '150px',  border: '2px solid'}}>Order</Button></div>
    </div>
  )
}

class App extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    var titles = ['Blog/ Article', 'Newsletter/ E-mailer', 'Whitepaper', 'e-book', 'Report/ Guide', 'Product Description', 'Website Content', 
    'Video Script', 'Company Profile/ Brochure', 'Press Release']
    var costs = [500, 1000, 2000, 1000, 1000, 500, 1000, 1000, 2000, 2000];
    var details = {1:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users.'}

    return (
      <Layout className='bg-white h-100'>
        
        {/* Sider here */}
        <Sider className='bg-white h-100 pt-100 border-right' width={70}>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item className='bg-white' key="1">
              <Icon type="appstore" style={{color: '#3EBCB3', fontSize: '25px'}}/>
            </Menu.Item>
            <Menu.Item className='bg-white' key="2">
              <Icon type="search" style={{color: '#3EBCB3', fontSize: '25px'}}/>
            </Menu.Item>
            <Menu.Item className='bg-white' key="9">
              <Icon type="gift" style={{color: '#3EBCB3', fontSize: '25px'}}/>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Header here */}
        <Layout className='bg-default'>
          <Header className='bg-white border-bottom pl-80'>
          <div className='flex flex-row'>
            <div><a href='http://www.whitepanda.in/'><img src={require('./logo.png')} height='25' width='125'/></a></div>
            <div className='flex flex-row flex-ac flex-jfe width-100'>
              <div className='p-lr-15'>
                <a href='#' style={{color: '#696969'}}><Badge count={699} overflowCount={1000}><Icon type="bell" style={{ fontSize: '25px', verticalAlign: 'middle'}}/></Badge></a></div>
              <div className='p-lr-15'>
                <a href='#'><Avatar size='large' style={{ backgroundColor: 'lightgreen', verticalAlign: 'middle' }}>AB</Avatar></a></div>
            </div>
          </div>
          </Header>

          <Content className='bg-default'>
            <div className='pl-80 flex flex-column flex-jse' style={{height: '400px', width: '85vw'}}>
              <div><span style={{fontSize: '40px', color: '#1D2330'}}>Content Store</span></div>
              <div className='bg-light pad-20'>
                <div style={{maxWidth: '54vw'}}>
                  <p style={{color: '#3EBCB3', fontSize: '20px'}}>Got bulk offers or almost similar offers! Fill the order brief in an excel file</p>
                  <p style={{color: '#ABACAC', fontSize: '13px', fontWeight: '600'}}>If you are wondering about an easy way to place orders in large numbers, 
                    we provide a way customized just for that.
                    Download our excel sheet and fill the order brief in the prescribed format and submit. In case you need any help, 
                  <a href='#' className='underline' style={{color: '#ABACAC'}}>we are just a click away to assist you in placing order.</a></p>
                  <Button type='primary' ghost style={{color: '#ABACAC', borderColor: '#ABACAC', fontWeight: 'bold'}}><span>Order via Excel Sheet</span></Button>
                </div>
              </div>
            </div>
            <div className='flex-row flex-wrap hover pl-80' style={{width: '85vw'}}>
              {Object.keys(costs).map((object, i) => <Card title={titles[i]} cost={costs[i]} details={details[1]} key={i}/>)}
            </div>
          </Content>

          {/* Footer here */}
          <Footer className='bg-footer' style={{ textAlign: 'center'}}>
            <div className='flex-row flex-center'>
              <div>
                <div className='flex-row flex-center font-link'>
                  <div className='pad-15'><a className='font-link' href='http://www.twitter.com'><Icon type="twitter" style={{fontSize: '40px'}}/></a></div>
                  <div className='pad-15'><a className='font-link' href='http://www.linkedin.com'><Icon type="linkedin" style={{fontSize: '40px'}}/></a></div>
                  <div className='pad-15'><a className='font-link' href='http://www.instagram.com'><Icon type="instagram" theme="filled" style={{fontSize: '40px'}}/></a></div>
                  <div className='pad-15'><a className='font-link' href='http://www.facebook.com'><Icon type="facebook" style={{fontSize: '40px'}}/></a></div>
                </div>
                <div className='pad-10 font-link' style={{fontSize: '16px'}}>
                  <span>Copyright @ 2019 White Panda Media Pvt. Ltd.</span><br/>
                  <span>All rights reserved</span>
                </div>
                <div className='pad-10' style={{fontSize: '16px'}}>
                  <div className='pad-10'>
                    <a className='font-link underline pad-10' href='#'>Privacy Policy</a>|
                    <a className='font-link underline pad-10' href='#'>Terms of service</a>|
                    <a className='font-link underline pad-10' href='#'>Service Agreement</a>|
                    <a className='font-link underline pad-10' href='#'>Contact Us</a></div>
                </div>
              </div>
            </div>
            <p style={{align: 'center', color: 'aqua', fontSize: '10px'}}>Developed by Gaurav Misra</p>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;