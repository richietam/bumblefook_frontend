import React, { Component } from 'react'
import { Grid, Image, Header, Divider, Container, Button, Icon } from 'semantic-ui-react'


export default class BfCardDetailContainer extends Component {

  handleClick = (event, data) => {
    this.props.handleBackButton()
  }

  handleFavoriteClick = () => {
    this.props.handleFavoriteSubmit(this.props.bfdata.id)
  }

  render () {
    const { id, name, description, location, image_url } = this.props.bfdata

    console.log('BFCardContainer', this.props)
    return (

      < Grid celled={'internally'} >
        < Grid.Row >
          < Grid.Column width={10} >
            <Image fluid src={this.props.bfdata ? image_url : null} alt="" className="detailImage" />
          </ Grid.Column >

          < Grid.Column width={6} >

            < Grid.Row >
              < Header as='h4'>
                {this.props.bfdata ? name : null}
              </ Header >
                Location: {this.props.bfdata ? location : null}
            </ Grid.Row >

            < Grid.Row >
              < Divider />
              < Container >
                <p>
                  {this.props.bfdata ? description : null}
                </p>
              < / Container >
              < br/>

              < Container >

                <Button animated onClick={this.handleFavoriteClick}>
                  <Button.Content visible >Save</Button.Content>
                  <Button.Content hidden>
                    <Icon name='heart' color='red' />
                  </Button.Content>
                </Button>

                <Button animated onClick={this.handleClick}>
                  <Button.Content visible >Back</Button.Content>
                  <Button.Content hidden>
                    <Icon name='eraser' color='red' />
                  </Button.Content>
                </Button>

              < / Container >

            </ Grid.Row >

          </ Grid.Column >

        </Grid.Row>
      </ Grid>
    )
  }
}
