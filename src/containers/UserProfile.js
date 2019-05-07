import React, { Component } from 'react'
import { Grid, Image, Header, Divider, Container, Button, Icon, Card } from 'semantic-ui-react'

export default class UserProfile extends Component {


  renderFavBumbleFooks = () => {
    return this.props.bumblefooks.map( bumble => {
      return < Card raised fluid
        image={bumble.image_url}
        id="BfCard"
        bf={bumble}
        key={bumble.id}
      />
    })
  }


  findCurrentUser = () => {

  }

  render () {

    return (
      < Grid columns={1} >

        < Grid.Row >
          < Grid.Column >
            <Container id="ProfileContainer">
              <img
                id="Avatar_profile"
                src="https://i.pinimg.com/originals/68/84/69/688469891e9982fa8a385e1e3f402571.jpg"
                class="ui small circular image centered"
              />
            </Container>
          </ Grid.Column >
        </ Grid.Row >

        < Grid.Row >
          < Grid.Column >
            <Container id="ProfileCardContainer">
              < Card.Group itemsPerRow={3}>
                {this.renderFavBumbleFooks()}
              </ Card.Group>
            </Container>
          </ Grid.Column >
        </ Grid.Row >


      </ Grid >



    )
  }
}
