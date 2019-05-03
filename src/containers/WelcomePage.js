import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'

export default class WelcomePage extends Component {

  render () {
    return (
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={10}>
            <Image fluid src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={6}>
          < LoginForm className="LoginForm" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}