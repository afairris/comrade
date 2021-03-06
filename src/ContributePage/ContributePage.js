import React, { Component } from 'react';

class ContributePage extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //
  //     DeliveryName: "Please Enter Delivery Name"
  //   }
  // }
  //
  // handleSubmit(){
  //   // firebase.database().ref('/users').set({ username : this.props.database.username });
  //   this.props.database.set({
  //     DeliveryName: this.state.DeliveryName,
  //   });
  //   console.log("Updated");
  // }
  //
  // handleChange(changeItem) {
  //   this.setState(changeItem);
  // }

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
          Contribute Page
        </div>
        <div className="pageContents">
          { this.props.username }
        </div>
      </div>
    )
  }
}

export default ContributePage;