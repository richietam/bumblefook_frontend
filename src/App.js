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
    users: [],
    cardId: null,
    currentUser: ""
  }

  componentDidMount () {
    Promise.all([
      fetch('http://localhost:3000/api/bumblefooks'),
      fetch('http://localhost:3000/api/users')
    ])
    .then( ( [res1, res2] ) => Promise.all( [res1.json(), res2.json()] ) )
      .then( ( [data1, data2] ) => this.setState({
        bumblefooks: data1,
        users: data2
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

  handleLoginSubmitButton = (username) => {
    console.log('loginsubmitbutton is being clicked')
    this.setState({
      currentUser: username,
      page: "UserProfile"
    })
  }

  handleLogOut = () => {
    this.setState({
      currentUser: "",
      page: "WelcomePage"
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
        return < WelcomePage
          handleLoginSubmitButton={this.handleLoginSubmitButton}
        />
      case "BfPage":
        return < BfPage
          bumblefooks={this.state.bumblefooks}
          cardId={this.state.cardId}
          handleBfCardClick={this.handleBfCardClick}
        />
      case "BfForm":
        return < BfForm handleSubmitBumblefook={this.handleSubmitBumblefook}/>
      case "UserProfile":
        return < UserProfile
          bumblefooks={this.state.bumblefooks}
          currentUser={this.state.currentUser}
        />
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
    console.log(this.state)
    return (
      <div className="App">
        < NavBar
          changePage={this.changePage}
          currentUser={this.state.currentUser}
          handleLogOut={this.handleLogOut}
        />
        {this.renderPage()}
      </div>
    )
  }
}

export default App;
