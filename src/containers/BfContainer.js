import React, { Component} from 'react'
import BfCardDetailContainer from './BfCardDetailContainer'
import BfCardContainer from './BfCardContainer'


export default class BfContainer extends Component {



  render () {

    return (
      <div>
        < BfCardContainer bumblefooks={this.props.bumblefooks} />
        < BfCardDetailContainer bumblefooks={this.props.bumblefooks} />
      </div>
    )
  }

}
