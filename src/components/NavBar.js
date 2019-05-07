import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  // <Menu.Item>
  //   <Input icon='search' placeholder='Search...' />
  // </Menu.Item>
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogoutClick = () => {
    this.props.handleLogOut()
  }

  // renderUserLink = () => {
  //   if (this.props.currentUser) {
  //     return <Menu.Item
  //         name={this.props.currentUser}
  //         active={activeItem === 'Current User'}
  //         onClick={ () => this.props.changePage("UserProfile") }
  //       />
  //   } else {
  //     return null
  //   }
  // }

  render() {
    // console.log('nav props', this.props.currentUser)

    const { activeItem } = this.state

    return (
      <Container id="mainNav">
      <Menu secondary id="mainNav">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={ () => this.props.changePage("WelcomePage")} />
        <Menu.Item
          name='Discover'
          active={activeItem === 'Discover'}
          onClick={ () => this.props.changePage("BfPage") }
        />
        <Menu.Item
          name='Add a Bumblefook'
          active={activeItem === 'Add a Bumblefook'}
          onClick={ () => this.props.changePage("BfForm") }
        />
        <Menu.Menu position='right'>

          <Menu.Item
            name={this.props.currentUser ? this.props.currentUser.toLowerCase() : null}
            active={this.props.currentUser ? activeItem === 'Current User' : null}
            onClick={ () => this.props.changePage("UserProfile") }
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogoutClick}
          />
        </Menu.Menu>
      </Menu>
      </Container>
    )
  }

}
