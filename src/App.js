import React, { Component } from 'react';
import * as firebase from 'firebase';
import LoggedInContainer from './LoggedInContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      page: "home",
    }

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDzp__Fgaj0UnPHJw0qsFQ4UxZUp_6qpKw",
      authDomain: "comrade-doggos.firebaseapp.com",
      databaseURL: "https://comrade-doggos.firebaseio.com",
      projectId: "comrade-doggos",
      storageBucket: "comrade-doggos.appspot.com",
      messagingSenderId: "854050456786"
    }

    firebase.initializeApp(firebaseConfig)
  }

  componentDidMount() {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        this.promptLogin()
      }

      console.log('Logged in', user.uid)

      // Set DB base
      const userdb = firebase.database().ref('/users/').child(user.uid)
      const requestdb = firebase.database().ref('/requests').child(user.uid)

      this.setState({
        userdb,
        requestdb,
        isLoading: false,
        isLoggedIn: true
      })
    })
  }

  promptLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()

    firebase.auth().signInWithRedirect(provider).then(function(result) {
      // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      const user = result.user;
      const userId = user.uid

      this.state = {
        loggerIn: user,
        userdb: firebase.database().ref('/users/').child(userId),
        requestdb: firebase.database().ref('/requests/').child(userId),
        isLoading: false,
        isLoggedIn: true
      }

      // // ...
    }).catch(function(error) {
      // // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...
      console.log(error)
    })
  }

  setPage(destination){
    this.setState({
      page: destination
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bork Bork World</h2>
        </div>
        <button onClick={ this.setPage.bind(this, "home") }>Home</button>
        <button onClick={ this.setPage.bind(this, "account") }>Account</button>
        <button onClick={ this.setPage.bind(this, "request") }>Request</button>
        <button onClick={ this.setPage.bind(this, "contribute") }>Contribute</button>
        <button onClick={ this.setPage.bind(this, "vote") }>Vote</button>

        {
          !this.state.isLoggedIn ?
          (
            <h2>You are logged out</h2>
          )
          : (
            <LoggedInContainer userdb={ this.state.userdb } page={ this.state.page } requestdb={ this.state.requestdb }  />
          )
        }
      </div>
    );
  }
}

export default App;
