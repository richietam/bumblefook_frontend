import React from "react"
import { Card, Image } from 'semantic-ui-react'
import BfModal from './modal'

class BfCard extends React.Component {

  handleClick = (event) => {
    this.props.handleBfCardClick(this.props.bf.id)
  }

render(){

  return (
    <div>

    <Card raised fluid id="BfCard">
      <BfModal {...this.props} />
    </Card>
    </div>
  )
}

}

export default BfCard
