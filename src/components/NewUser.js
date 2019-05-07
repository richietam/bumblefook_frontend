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

    fetch('http://localhost:3000/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        bio: this.state.bio,
      })
    })
      .then(resp => resp.json())
      .then(user => console.log(user))
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
