import React from 'react'
import { Button, Header, Image, Modal, Comment, Form } from 'semantic-ui-react'
import BfCardDetailContainer from '../containers/BfCardDetailContainer'


class BfModal extends React.Component{

  render(){

    return(
      <Modal
        trigger={<Image fluid src={this.props.bf.image_url}/>}
        id="Modal"
      >
      <Modal.Header>
        < BfCardDetailContainer bfdata={this.props.bf} />
      </Modal.Header>

    </Modal>
    )
  }
}


export default BfModal
