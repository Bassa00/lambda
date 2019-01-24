import React from 'react'
import { Image } from 'semantic-ui-react'

const Banner = () => 
<div>
  <Image src='https://images.unsplash.com/photo-1540205082-e56e180508e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cc8260f6b8370c4e32ab6bfc1034254&auto=format&fit=crop&w=889&q=80' fluid style={{height:'100vh' }} />
  <div style={{
    position: 'absolute', 
    textAlign: 'center', 
    top: '50%',
    left: '17%'
    }}>
      <h1 style={{fontSize: '60px', color: 'white'}}>WE DESIGN SUPER COOL STUFF</h1>
      <p style={{fontSize: '25px', color: 'white'}}>We are a small digital agency and we love our pixels.</p>
    </div>
</div>

export default Banner;
