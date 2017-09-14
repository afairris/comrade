import React, { Component } from 'react'

class LoggedInContainer extends Component {
  constructor(props) {
    super(props)
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
        <div className="pageContents">
          { this.props.username }
        </div>
      </div>
    )
  }
}

export default LoggedInContainer;