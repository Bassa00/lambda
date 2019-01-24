import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'

const colors = [
  'grey',
]

class ExampleMenu extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu primary color={color} inverted>
        <Menu.Item>
          <img src='https://img.icons8.com/color/50/000000/lambda.png' alt='lambda'/>
          LAMBDA
        </Menu.Item>
        <Menu.Item   name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item 
          name='About Us'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='Services'
          active={activeItem === 'services'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='Portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='Contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
          <Menu.Item position='right'>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
      </Menu>
    )
  }
}

const MainMenu = () => {
  const menus = colors.map(color => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MainMenu;
