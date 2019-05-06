import React, { Component} from 'react'
import BfCardContainer from './BfCardContainer'
import BfCardDetailContainer from './BfCardDetailContainer'

export default class Bfpage extends Component {


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
    console.log('bf page props',this.props.cardId)
    return (
      <div>
        <BfCardContainer
          bumblefooks={this.props.bumblefooks}
          handleBfCardClick={this.props.handleBfCardClick}
        />
      </div>
    )
  }
}
