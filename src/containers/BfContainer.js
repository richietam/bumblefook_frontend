import React, { Component} from 'react'
import BfCardDetailContainer from './BfCardDetailContainer'
import BfCardContainer from './BfCardContainer'
import CrudButtons from '../components/CrudButtons'

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
        < CrudButtons />
        < BfCardContainer bumblefooks={this.state.bumblefooks} class="BfCardContainer" />
        < BfCardDetailContainer bumblefooks={this.state.bumblefooks} />
      </div>
    )
  }

}
