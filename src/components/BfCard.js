import React from "react"
import { Card, Image } from 'semantic-ui-react'

class BfCard extends React.Component {

render(){
  return (
    <Card>
      <Image src={this.props.bf.image_url} />
    </Card>
  )
}

}

export default BfCard
