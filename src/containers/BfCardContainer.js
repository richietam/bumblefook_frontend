import React from "react"
import BfCard from '../components/BfCard'
import { Grid, Image, Header, Divider, Container, Button, Icon, Card } from 'semantic-ui-react'

class BfCardContainer extends React.Component {

  renderBfGallery= () => {
    return this.props.bumblefooks.map(bf => {
      return < BfCard
            key={bf.id}
            bf={bf}
            handleBfCardClick={this.props.handleBfCardClick}
        />
      })
    }

  render(){

  	return (
      <div id="DiscoverDiv">
        <Grid columns={1} className="Naomi">
          <Grid.Row >
            <Grid.Column >
              <Container id="BfCardContainer">
                <Card.Group itemsPerRow={4}>
          		     {this.renderBfGallery()}
                </Card.Group>
              < /Container>
            < /Grid.Column >
          < /Grid.Row>
        </Grid>
  </div>
  	)
  }
}


export default BfCardContainer
