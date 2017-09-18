import React, { Component } from 'react'

class LoggedInContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Initial Text"
    }
  }

  SubmitClick(){
  this.setState({ text: this.refs.TextBox.value });
  window.alert( this.state.text );
}

  componentDidMount() {
    //this.props.database.update({
    //  lastLogin: Date.now()
    //})
  }

  render() {
    return (
      <div>
        <div className="appTitle">
          Comrade Doggo
        </div>
        <div className="InputStuff">
        <input ref="TextBox" type="text" placeholder="Enter Text Here" />
        <button onClick={ this.SubmitClick.bind(this) }>The Button</button>
        </div>
        <div className="pageContents">
          { this.props.username }
        </div>
      </div>
    )
  }
}

export default LoggedInContainer;