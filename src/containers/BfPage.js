import React, { Component} from 'react'
import NavBar from '../components/NavBar'
import BfContainer from './BfContainer'
import WelcomePage from './WelcomePage'




export default class Bfpage extends Component {
  render() {
    return (
      <div>
        < NavBar />
        < WelcomePage />
        < BfContainer />
      </div>
    )
  }
}
