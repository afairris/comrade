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
        return <AccountPage database={ this.props.database }/>
        break;
      case "request":
        return <RequestPage database={ this.props.database }/>
        break;
      case "contribute":
        return <ContributePage database={ this.props.database }/>
        break;
      case "vote":
        return <VotePage database={ this.props.database }/>
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