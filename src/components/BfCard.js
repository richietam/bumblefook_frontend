import React from "react"
import { Card, Image } from 'semantic-ui-react'
import BfModal from './BfModal'

class BfCard extends React.Component {

  handleClick = (event) => {
    this.props.handleBfCardClick(this.props.bf.id)
  }

  render(){
    console.log('in bf card', this.props)
    return (
      <div>

          <BfModal
            {...this.props}
            handleFavoriteSubmit={this.props.handleFavoriteSubmit}
          />

      </div>
    )
  }

}

export default BfCard
