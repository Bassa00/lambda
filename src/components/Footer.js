import React from 'react'
import {Segment, Divider,  Icon } from 'semantic-ui-react'

const Footer = () => (
  <div classname='footerBody' >
    <Segment inverted textAlign='center' fluid style={{height:'18vh' }}>
       
        <div className= 'da' style={{float: 'left', width: '33.33%'}}>
            <h4>DIGITAL AGENCY</h4>
            <p>A Digital Creative agency building next generation products to inspire the world.</p>
        </div>

        <div className= 'fu' style={{float: 'left', width: '33.33%'}}>
            <h4>FIND US AT</h4>
            <p>100 Maiden St London WC2E 7LB, United Kingdom</p>
        </div>
        
        <div className= 'co' style={{float: 'left', width: '33.33%'}}>
            <h4>CONTACT</h4>
            <p>001-123-456-7890 info@oxygenna.com</p>
        </div>
        
        <div className= 'co' style={{float: 'right', marginTop:'18px', marginRight:'140px'}}>
            <Icon name='facebook f' size='large' color='blue' />
            <Icon name='twitter' size='large'color='blue'/>
            <Icon name='linkedin' size='large' color='blue'/>
            <Icon name='google plus g' size='large' color='blue'/>
            <Icon name='tumblr' size='large' color='blue'/>
        </div>
    </Segment>
    <Divider horizontal >© Brian Scott 2018</Divider>
        
  </div>
 
)

export default Footer;
