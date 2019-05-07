import React, { Component} from 'react'
import BfCardContainer from './BfCardContainer'

export default class Bfpage extends Component {
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
