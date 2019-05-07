import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BfPage from './containers/BfPage'
import NavBar from './components/NavBar'
import BfForm from './containers/BfForm'
import WelcomePage from './containers/WelcomePage'
import BfCardDetailContainer from './containers/BfCardDetailContainer'
import UserProfile from './containers/UserProfile'

class App extends Component {

  state = {
    page: "WelcomePage",
    bumblefooks: [],
    cardId: null
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/bumblefooks')
    .then( res => res.json() )
    .then( (bumblefooks) => this.setState({
      bumblefooks: bumblefooks
    }))
  }

  handleBfCardClick = (bf) => {
    // console.log('i am clicked! id is', bf)
    this.setState({
      cardId: bf,
      page: "BfCardDetailContainer"
    })
  }

  handleBackButton = () => {
    // console.log('back button is clicked')
    this.setState({
      page: "BfPage"
    })
  }

  changePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }


  handleSubmitBumblefook = bumblefook => {
    // console.log(bumblefook)
      this.setState(
        {
          bumblefooks: [...this.state.bumblefooks, bumblefook],
          page: "BfPage"
        }
      )
  }




  renderPage = () => {
    switch(this.state.page){
      case "WelcomePage":
        return < WelcomePage />
      case "BfPage":
        return < BfPage
          bumblefooks={this.state.bumblefooks}
          cardId={this.state.cardId}
          handleBfCardClick={this.handleBfCardClick}
        />
      case "BfForm":
        return < BfForm handleSubmitBumblefook={this.handleSubmitBumblefook}/>
      case "UserProfile":
        return < UserProfile />
      case "BfCardDetailContainer":
        return < BfCardDetailContainer
          bumblefooks={this.state.bumblefooks}
          cardId={this.state.cardId}
          handleBackButton={this.handleBackButton}
        />
      default:
        return null
    }
  }


  render () {
    // console.log(this.state.bumblefooks)
    return (
      <div className="App">
        < NavBar changePage={this.changePage} />
        {this.renderPage()}
      </div>
    )
  }
}

export default App;
