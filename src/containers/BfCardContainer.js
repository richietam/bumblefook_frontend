import React from "react"
import BfCard from '../components/BfCard'

import { Grid } from 'semantic-ui-react'


class BfCardContainer extends React.Component {

  renderBfGallery= () => {
    const bfGallery = this.props.bumblefooks.map(bf => {
      return(
        <Grid.Column>
          <BfCard
            key={bf.id}
            bf={bf}
            handleClick={this.props.handleClick}
          />
        </Grid.Column>
      )
    })
    return bfGallery
  }




  render(){
  	return (
      <Grid>
        <Grid.Row columns={3}>
    		  {this.renderBfGallery()}
        </Grid.Row>
      </Grid>
  	)
  }
}


export default BfCardContainer
