import React, { Component} from 'react'
import BfCardDetailContainer from './BfCardDetailContainer'

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
    // console.log(this.state.bumblefooks)
    return (
      <div>
        we not heah yet in container
        < BfCardDetailContainer bumblefooks={this.state.bumblefooks} />
      </div>
    )
  }

}
