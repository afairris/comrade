import React, { Component } from 'react';
import AccountPage from '../AccountPage';
import RequestPage from '../RequestPage';
import ContributePage from '../ContributePage';
import VotePage from '../VotePage';

class LoggedInContainer extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }

 
  render() {
    switch (this.props.page) {
      case "account":
        return <AccountPage userdb={ this.props.userdb } requestdb={ this.props.requestdb }/>
        break;
      case "request":
        return <RequestPage userdb={ this.props.userdb } requestdb={ this.props.requestdb }/>
        break;
      case "contribute":
        return <ContributePage userdb={ this.props.userdb } requestdb={ this.props.requestdb }/>
        break;
      case "vote":
        return <VotePage userdb={ this.props.userdb } requestdb={ this.props.requestdb }/>
        break;

      default:
        return (
          <div>
            <div className="appTitle">
              Home Page
            </div>
          </div>
        )
        break;
    }


  }
}

export default LoggedInContainer;