import React from "react"
import BfCard from '../components/BfCard'
import { Grid, Image, Header, Divider, Container, Button, Icon, Card } from 'semantic-ui-react'
import StackGrid from "react-stack-grid";


class BfCardContainer extends React.Component {

  renderBfGallery= () => {
    return this.props.bumblefooks.map(bf => {
      return < BfCard
            key={bf.id}
            bf={bf}
            handleBfCardClick={this.props.handleBfCardClick}
            handleFavoriteSubmit={this.props.handleFavoriteSubmit}
        />
      })
    }

  render(){

  	return (
      <StackGrid
         columnWidth={500}
         id="stackgrid"
       >
       {this.renderBfGallery()}
       </StackGrid>
  	)
  }
}


export default BfCardContainer
