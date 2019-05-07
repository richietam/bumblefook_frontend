import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
class LoginForm extends Component {

  state = {
    currentUser: ""
  }

  handleChange = (e) => {
    this.setState({
      currentUser: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLoginSubmitButton(this.state.currentUser)
  }

  render () {
    return(
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='left'>
              <Image src='' /> Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  value={this.state.currentUser}
                  onChange={this.handleChange}
                />
                <Button
                  color='black'
                  onClick={this.handleSubmit}
                  fluid size='large'
                >
                  Login
                </Button>
              </Segment>
            </Form>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm
