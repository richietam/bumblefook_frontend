import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class BfCardDetailContainer extends Component {


  render () {
    console.log( 'BFCardContainer', this.props.bumblefooks)
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <img src={this.props.bumblefooks[1] ? this.props.bumblefooks[1].image_url : null} alt="" className="detailImage" />
          </Col >
          <Col sm={4}>
          </Col>
        </Row>
      </Container >
    )
  }
}
