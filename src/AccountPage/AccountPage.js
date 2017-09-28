import React, { Component } from 'react';

class AccountPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

      DeliveryName: "Please Enter Delivery Name",
      DeliveryAddress: "Please Enter Delivery Address",
      Group: "Please Select Group"
    }
  }

  handleSubmit(){
    this.props.userdb.set({
      DeliveryName: this.state.DeliveryName,
      DeliveryAddress: this.state.DeliveryAddress,
      Group: this.state.Group,
    });
    console.log("Updated");
  }

  handleChange(changeItem) {
    this.setState(changeItem);
  }

  componentDidMount() {
     // Load state from DB
    this.props.userdb.on('value', (snapshotData) => {
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
          <select value={this.state.Group} onChange={ (event) => this.handleChange({ Group: event.target.value })}>
            <option value="Please Select Group">Please Select Group</option>
            <option value="Conclave of Borkistan">Conclave of Borkistan</option>
          </select>
        </div>
        <div>
          <button onClick={ this.handleSubmit.bind(this) }>Submit</button>
        </div>
        <div>
          <p>{"For a new group, contact the Giant British Puppy"}</p>
        </div>
      </div>
    )
  }
}

export default AccountPage;