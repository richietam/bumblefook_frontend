import React, { Component} from 'react'
import NavBar from '../components/NavBar'
import BfContainer from './BfContainer'
import WelcomePage from './WelcomePage'
import BfForm from './BfForm'

export default class Bfpage extends Component {

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


  // addBumblefook = () => {
  //   // render() {
  //     return (
  //       console.log("here!")
  //       <div>
  //         < BfForm bumblefooks={this.state.bumblefooks} />
  //         </div>
  //     )
  //   // }
  // }

submitNewBumblefook = bumblefook => {
  this.setState({ bumblefooks: [...this.state.bumblefooks, bumblefook] })
}

  render() {
    return (
      <div >
        < NavBar addBumblefook={this.addBumblefook} />
        < WelcomePage />
        < BfContainer bumblefooks={this.state.bumblefooks} />
        < BfForm bumblefooks={this.state.bumblefooks} />
      </div>
    )
  }
}
