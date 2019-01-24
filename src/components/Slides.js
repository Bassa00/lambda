import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const Slides = () => (
  <Reveal animated='move'>
    <Reveal.Content visible>
      <div style={{height: '400px'}}>
        <Image src='http://demo.bestdnnskins.com/portals/6/innerpage/banner3_04.jpg' fluid style={{height:'50vh' }} />
        <div style={{
          position: 'absolute', 
          textAlign: 'center', 
          top: '35%',
          left: '10%',
          right: '10%'

        }}>
          
          <p style={{fontSize: '25px', color: 'black'}}><b style={{fontSize: '50px'}}>"</b>Christos Pantazis is the quickest and most helpful guy I've ever met on Themeforest. His theme is awesome and if you need to alter it under the hood, he responds so quickly. I could hardly believe. Big plus for his support and a big plus for his amazing theme. Keep it up.</p>
          <p style={{fontSize: '14px', color: 'black'}}>-Jennifer Stewart Stimware</p>
        </div>
      </div>
    </Reveal.Content>

    <Reveal.Content hidden>
      <div>
        <Image src='http://demo.bestdnnskins.com/portals/6/innerpage/banner3_02.jpg' fluid style={{height:'50vh' }} />
        <div style={{
          position: 'absolute', 
          textAlign: 'center', 
          top: '35%',
          left: '10%',
          right: '10%'

        }}>
          
          <p style={{fontSize: '25px', color: 'black'}}><b style={{fontSize: '50px'}}>"</b>I've been a long time themeforest buyer and i have bought dozens of themes and i can't express to you how powerful beautiful and dynamic this theme is let alone the great customer service and you get a them that is a must. Whether you have a theme you like or not, you must get this theme!</p>
          <p style={{fontSize: '14px', color: 'black'}}>-Nicholas Thomas E-texon</p>
        </div>
      </div>
    </Reveal.Content>
  </Reveal>
)

export default Slides;
