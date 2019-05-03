import React from "react"
import { Button } from 'semantic-ui-react'


class CrudButtons extends React.Component {

render(){
  return (
    <div>
    <Button.Group floated='center'>
      <Button>Add a Bumblefook</Button>
    </Button.Group>
  </div>

  )
}

}

export default CrudButtons
