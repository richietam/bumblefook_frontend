import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {


    const { activeItem } = this.state

    return (
      <Container id="mainNav">
      <Menu secondary id="mainNav">
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Discover'
          active={activeItem === 'Discover'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Favorites'
          active={activeItem === 'Favorites'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Add a Bumblefook'
          active={activeItem === 'Add a Bumblefook'}
          onClick={this.props.addBumblefook}
        />
        <Menu.Item
          name='Find a Haunted House'
          active={activeItem === 'Finda Haunted House'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </Container>
    )
  }

}
