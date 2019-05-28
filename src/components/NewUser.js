import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class NewUser extends Component {

  state = {
    name: '',
    bio: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewUserSubmit(this.state.name, this.state.bio)
  }

  render () {
    console.log(this.state)
    return (
      <div id="newUser">
      <Form>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder='username'
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Bio</label>
          <input
            placeholder='Tell us your tale'
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I give you my soul' />
        </Form.Field>
        <Button
          type='submit'
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
    </Form>
    </div>
    )
  }
}
