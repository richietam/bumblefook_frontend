import React from "react"
import BfCard from '../components/BfCard'

import { Grid } from 'semantic-ui-react'


class BfCardContainer extends React.Component {

  renderBfGallery= () => {
    return this.props.bumblefooks.map(bf => {
      return(
        <Grid.Column key={bf.id}>
          <BfCard
            key={bf.id}
            bf={bf}
            handleBfCardClick={this.props.handleBfCardClick}
          />
        </Grid.Column>
      )
    })
  }

  render(){
  	return (
      <Grid className="Naomi">
        <Grid.Row columns={3}>
    		  {this.renderBfGallery()}
        </Grid.Row>
      </Grid>
  	)
  }
}


export default BfCardContainer
