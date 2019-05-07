import React from 'react'
import { Button, Header, Image, Modal, Comment, Form } from 'semantic-ui-react'


class BfModal extends React.Component{

  render(){

    return(
      <Modal trigger={<Image fluid src={this.props.bf.image_url}/>} >


      <Modal.Header>{this.props.bf.id}</Modal.Header>

    </Modal>
    )
  }
}


export default BfModal
