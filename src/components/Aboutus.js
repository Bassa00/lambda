import React from 'react'
import { Image, Divider } from 'semantic-ui-react'

const AboutUs = () => (
  <div style = {{height: '375px'}}>
    <table>
        <tr>
            <td>
                <Image
                src='http://www.doonexams.com/001/img/web-Design-Development.png'
                as='a'
                size='big'
                href='/'
                target='_blank'
                spaced = 'left'
                />
        </td>
            <td>
                <h1 style={{fontSize: '45px', alignContent: 'center'}}>ABOUT US</h1>
                <Divider />
                <p style={{fontSize: '24px', alignContent: 'center', marginRight: '50px', color:'#696969', lineHeight:'35px'}}>Create stunning pages with our powerful admin panel. Functionality and usability combine to let you design your pages without any coding.
Get Lambda now and start creating the perfect site for you right away.</p>
            </td>
        </tr>
    </table>
  </div>
)

export default AboutUs