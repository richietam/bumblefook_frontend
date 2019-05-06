import React from "react"
import { Card, Image } from 'semantic-ui-react'

class BfCard extends React.Component {

  handleClick = (event) => {
    this.props.handleBfCardClick(this.props.bf.id)
  }

render(){
  // console.log('bf card props', this.props)
  return (
    <Card>
      <Image
        src={this.props.bf.image_url}
        onClick={this.handleClick}
      />
    </Card>
  )
}

}

export default BfCard
