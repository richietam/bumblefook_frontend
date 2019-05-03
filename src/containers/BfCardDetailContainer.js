import { Grid, Image, Header, Divider, Container, Button, Icon } from 'semantic-ui-react'



export default class BfCardDetailContainer extends Component {


  render () {
    console.log('BFCardContainer', this.props.bumblefooks)
    return (
      < Grid celled={'internally'} >
        < Grid.Row >
          < Grid.Column width={10} >
            <Image fluid src={this.props.bumblefooks[1] ? this.props.bumblefooks[1].image_url : null} alt="" className="detailImage" />
          </ Grid.Column >

          < Grid.Column width={6} >
            < Grid.Row >
              < Header as='h4'>
                {this.props.bumblefooks[1] ? this.props.bumblefooks[1].name : null}
              </ Header >
                Location: {this.props.bumblefooks[1] ? this.props.bumblefooks[1].location : null}
            </ Grid.Row >

            < Grid.Row >

              < Divider />

              < Container >
                <p>
                  {this.props.bumblefooks[1] ? this.props.bumblefooks[1].description : null}
                </p>
              < / Container >

              < br/>

              < Container >
                <Button animated>
                  <Button.Content visible >Save</Button.Content>
                  <Button.Content hidden>
                    <Icon name='heart' color='red' />
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
