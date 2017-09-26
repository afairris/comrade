import React, { Component } from 'react';

class AccountPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

      DeliveryName: "Please Enter Delivery Name",
      DeliveryAddress: "Please Enter Delivery Address"
    }
  }

  handleSubmit(){
    // firebase.database().ref('/users').set({ username : this.props.database.username });
    this.props.database.set({ 
      DeliveryName: this.state.DeliveryName,
      DeliveryAddress: this.state.DeliveryAddress,
    });
    console.log("Updated");
  }

  handleChange(changeItem) {
    this.setState(changeItem);
  }

  componentDidMount() {
     // Load state from DB
    this.props.database.on('value', (snapshotData) => {
      console.log(snapshotData.val())
      if (snapshotData.val()) {

        this.setState({
          ...snapshotData.val()
        })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="appTitle">
          Account Page
        </div>
        <div className="InputStuff">
        <input value={ this.state.DeliveryName } onChange={ (event) => this.handleChange({ DeliveryName: event.target.value })} type="text" placeholder="Delivery Name" />
        </div>
        <div className="InputStuff">
        <input value={ this.state.DeliveryAddress } onChange={ (event) => this.handleChange({ DeliveryAddress: event.target.value })} type="text" placeholder="Delivery Address" />
        </div>
        <div>
        <button onClick={ this.handleSubmit.bind(this) }>Submit</button>
        </div>
        <div className="pageContents">
          { this.props.username }
        </div>
      </div>
    )
  }
}

export default AccountPage;