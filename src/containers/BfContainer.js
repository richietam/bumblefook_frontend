import React, { Component} from 'react'

export default class BfContainer extends Component {

  state = {
    bumblefooks: []
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/bumblefooks')
      .then( res => res.json() )
        .then( (bumblefooks) => this.setState({
          bumblefooks: bumblefooks
        }))
  }

  render () {
    console.log(this.state.bumblefooks)
    return (
      <div>
        we not heah yet in container
      </div>
    )
  }

}
