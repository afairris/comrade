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
      const database = firebase.database().ref('/users/').child(user.uid)

      this.setState({
        database,
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
        database: firebase.database().ref('/users/').child(userId),
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


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bork Bork World</h2>
        </div>
        {
          !this.state.isLoggedIn ?
          (
            <h2>You are logged out</h2>
          )
          : (
            <LoggedInContainer username="Toto The First Doggo" />
          )
        }
      </div>
    );
  }
}

export default App;
