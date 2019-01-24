import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'

const OurWork = () => (
  
    <div>
        <div className='header'>
            <Header style={{fontSize: '45px'}} textAlign='center' icon >
                OUR WORK
                <Divider />
                <Header.Subheader>
                <p style={{fontSize: '24px', alignContent: 'center', marginLeft: '50px', marginRight: '50px', color:'#696969', lineHeight:'35px' }}>We create a unique process for each client to ensure that business objectives are met, success is achieved and people are happy.</p>
                </Header.Subheader>
            </Header>
        </div>

        <div style={{marginLeft:'65px', marginRight:'65px'}} >
            <Divider hidden />
            <Image.Group size='medium'>
                <Image rounded src={'https://vignette.wikia.nocookie.net/wiiu/images/5/5e/New-Super-Mario-Bros-Art-21-400x400.jpg/revision/latest?cb=20121029024830'} />
                <Image rounded src={'http://www.commongroundgroup.net/wp-content/uploads/2011/10/earth-from-space-western-400x400.jpg'} />
                <Image rounded src={'http://www.fujitsu.com/au/imagesgig5/400x400%20Data%20Centres_tcm98-4080346_tcm98-2750237-32.jpg'} />
                <Image rounded src={'https://inglewoodfarmschristmastrees.co.uk/wp-content/uploads/2016/08/Nordmann-Christmas-Trees-4-400x400.jpg'} />
            </Image.Group>
                
            <Image.Group size='medium'>
                <Image rounded src={'http://www.commongroundgroup.net/wp-content/uploads/2011/10/earth-from-space-western-400x400.jpg'} />
                <Image rounded src={'https://vignette.wikia.nocookie.net/wiiu/images/5/5e/New-Super-Mario-Bros-Art-21-400x400.jpg/revision/latest?cb=20121029024830'} />
                <Image rounded src={'https://inglewoodfarmschristmastrees.co.uk/wp-content/uploads/2016/08/Nordmann-Christmas-Trees-4-400x400.jpg'} />
                <Image rounded src={'http://www.fujitsu.com/au/imagesgig5/400x400%20Data%20Centres_tcm98-4080346_tcm98-2750237-32.jpg'} />
            </Image.Group>
        </div>
    </div>
)

export default OurWork;
