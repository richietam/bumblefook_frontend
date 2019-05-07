import React, { Component } from 'react';
import './App.css';
import BfPage from './containers/BfPage'
import NavBar from './components/NavBar'
import BfForm from './containers/BfForm'
import WelcomePage from './containers/WelcomePage'
import BfCardDetailContainer from './containers/BfCardDetailContainer'
import UserProfile from './containers/UserProfile'
import NewUser from './components/NewUser'

class App extends Component {

  state = {
    page: "NewUser",
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

  findCurrentUser = () => {
    const foundUser = this.state.users.find( bf => {
      return bf.name.toLowerCase() === this.state.currentUser.toLowerCase()
    })
    return foundUser
  }

  handleFavoriteSubmit = (data) => {
    const currentUser = this.findCurrentUser()
    console.log('submit button is clicked data is', data, this.findCurrentUser())

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        bumblefook_id: data,
        user_id: currentUser.id,
      })
    })
      .then(resp => resp.json())
      .then(bumblefook =>
        fetch('http://localhost:3000/api/users')
          .then(res => res.json())
            .then( users => {
              this.setState({
                users: users,
                page: "BfPage"
              })
            })
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
          users={this.state.users}
        />
      case "BfCardDetailContainer":
        return < BfCardDetailContainer
          bumblefooks={this.state.bumblefooks}
          cardId={this.state.cardId}
          handleBackButton={this.handleBackButton}
          handleFavoriteSubmit={this.handleFavoriteSubmit}
        />
      case "NewUser":
        return < NewUser
        />
      default:
        return null
    }
  }

  render () {
    console.log('all users:', this.state.users)
    console.log('current user:', this.state.currentUser)
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
