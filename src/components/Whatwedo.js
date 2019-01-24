import React from 'react'
import { Header, Icon, Divider } from 'semantic-ui-react'

const WhatWeDo = () => (
  
    <div>
        <div className='header'>
            <Header style={{fontSize: '45px'}} textAlign='center' icon >
                WHAT WE DO
                <Divider />
                <Header.Subheader>
                <p style={{fontSize: '24px', alignContent: 'center', marginLeft: '50px', marginRight: '50px', color:'#696969', lineHeight:'35px' }}>I create a unique process for each client to ensure that business objectives are met, success is achieved and people are happy.</p>
                </Header.Subheader>
            </Header>
        </div>
        <div className='content'>
            
            <div className='web' style={{float: 'left', width: '25%', padding: '50px'}}>
                <Header as='h2' textAlign='center' icon >
                    <Icon name='internet explorer' color='blue'/>
                    WEB <br/><br/>
                    <Header.Subheader>
                        <h4>
                            Lambda is designed with attention to details. Our intention is to create a theme that would to look cool and awesome.
                        </h4>
                    </Header.Subheader>
                </Header>
            </div>
            
            <div className='branding' style={{float: 'left', width: '25%', padding: '50px'}}>
                <Header as='h2' textAlign='center' icon >
                    <Icon name='random' color='blue' />
                    BRANDING <br/><br/>
                    <Header.Subheader>
                        <h4>
                            Lambda is designed with attention to details. Our intention is to create a theme that would to look cool and awesome.
                        </h4>
                    </Header.Subheader>
                </Header>
            </div>
            
            <div className='app' style={{float: 'left', width: '25%', padding: '50px'}}>
                <Header as='h2' textAlign='center' icon >
                    <Icon name='bullhorn' color='blue' />
                    APP <br/><br/>
                    <Header.Subheader>
                        <h4>
                            Lambda is designed with attention to details. Our intention is to create a theme that would to look cool and awesome.
                        </h4>
                    </Header.Subheader>
                </Header>
            </div>
            
            <div className='seo' style={{float: 'left', width: '25%', padding: '50px'}}>
                <Header as='h2' textAlign='center' icon >
                    <Icon name='key' color='blue' />
                    SEO <br/><br/>
                    <Header.Subheader>
                        <h4>
                            Lambda is designed with attention to details. Our intention is to create a theme that would to look cool and awesome.
                        </h4>
                    </Header.Subheader>
                </Header>
            </div>
        </div>
    </div>
)

export default WhatWeDo;
