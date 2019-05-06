import React from 'react'
import { Form } from 'semantic-ui-react'

export default class BfForm extends React.Component {

    constructor() {
    super()

    this.state = this.getInitialState()
  }

  getInitialState = () => ({ name: '', description: '', location: '', image_url: '' })


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
      e.preventDefault()
      const { name, description, location, image_url } = this.state
      fetch('http://localhost:3000/api/bumblefooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: 'name',
          description: 'description',
          location: 'location',
          image_url: 'image_url'
        })
      })
        .then(resp => resp.json())
        .then(bumblefook => this.props.addBumblefook(bumblefook))
        .catch(error => console.error(error))
      this.setState(this.getInitialState())
    }


render() {
  const { name, description, location, image_url } = this.state
  const { handleChange, handleSubmit } = this
 return (
   <div>
     <h3>Add a Bumblefook!</h3>
     <Form onSubmit={handleSubmit}>
       <Form.Group widths="equal">
         <Form.Input
           fluid
           label="Name"
           type="text"
           placeholder="Name"
           name="name"
           value={this.state.name}
           onChange={this.handleChange}
         />
         <Form.Input
           fluid
           label="Description"
           type="text"
           placeholder="Description"
           name="description"
           value={this.state.description}
           onChange={this.handleChange}
         />
         <Form.Input
           fluid
           label="Location"
           type="text"
           placeholder="Location"
           name="location"
           value={this.state.location}
           onChange={this.handleChange}
         />
         <Form.Input
           fluid
           label="Image URL"
           type="text"
           placeholder="url"
           name="imageUrl"
           value={this.image_url}
           onChange={this.handleChange}
         />
       </Form.Group>
       <Form.Button>Submit</Form.Button>
     </Form>
   </div>
 )
}


}
