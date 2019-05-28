import React, { Component } from 'react'
import { Grid, Container, Card } from 'semantic-ui-react'
import StackGrid from "react-stack-grid";

export default class UserProfile extends Component {


  renderFavBumbleFooks = () => {
    return this.findCurrentUser().bumblefooks.map( bumble => {
      return < Card raised fluid
        image={bumble.image_url}
        id="BfCard"
        bf={bumble}
        key={bumble.id}
        alt=""
      />
    })
  }

  // filterUserFavorites = () => {
   // grab ids from favorites
   //
  // }

  findCurrentUser = () => {
    const foundUser = this.props.users.find( bf => {
      return bf.name.toLowerCase() === this.props.currentUser.toLowerCase()
    })
    return foundUser
  }

  render () {
    console.log('findCurrentUser', this.findCurrentUser())
    return (
      < Grid columns={1} >

        < Grid.Row >
          < Grid.Column >
            <Container id="ProfileContainer">
              <img
                id="Avatar_profile"
                src="https://i.pinimg.com/originals/68/84/69/688469891e9982fa8a385e1e3f402571.jpg"
                className="ui small circular image centered"
                alt=""
              />
              <Container>
              <br/>
                Name: {this.findCurrentUser().name}
              <br/>
                Bio: {this.findCurrentUser().bio}
              </ Container>
            </Container>
          </ Grid.Column >
        </ Grid.Row >

        < Grid.Row >
          < Grid.Column >
          <StackGrid
             columnWidth={500}
             id="stackgrid"
           >
           {this.renderFavBumbleFooks()}
           </StackGrid>
          </ Grid.Column >
        </ Grid.Row >

      </ Grid >
    )
  }
}
