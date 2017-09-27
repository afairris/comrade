import React, { Component } from 'react';

class RequestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      RequestName: "Brief Description",
      RequestLink: "Link to item",
      Price: "Price incl taxes and delivery",
      SizeDetails: "Size or other required details",
    }
  }

  handleSubmit(){
    this.props.requestdb.set({
      RequestName: this.state.RequestName,
      RequestLink: this.state.RequestLink,
      Price: this.state.Price,
      SizeDetails: this.state.SizeDetails,
    });
    console.log("Updated");
  }

  handleChange(changeItem) {
    this.setState(changeItem);
  }

  componentDidMount() {
    // Load state from DB
    this.props.requestdb.on('value', (snapshotData) => {
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
          Request Page
        </div>
        <div className="InputStuff">
          <input value={ this.state.RequestName } onChange={ (event) => this.handleChange({ RequestName: event.target.value })} type="text" placeholder="Short Description" />
        </div>
        <div className="InputStuff">
          <input value={ this.state.RequestLink } onChange={ (event) => this.handleChange({ RequestLink: event.target.value })} type="text" placeholder="Link to item" />
        </div>
        <div className="InputStuff">
          <input value={ this.state.Price } onChange={ (event) => this.handleChange({ Price: event.target.value })} type="text" placeholder="Price" />
        </div>
        <div className="InputStuff">
          <input value={ this.state.SizeDetails } onChange={ (event) => this.handleChange({ SizeDetails: event.target.value })} type="text" placeholder="Size or other Details" />
        </div>
        <div>
          <button onClick={ this.handleSubmit.bind(this) }>Submit</button>
        </div>
      </div>
    )
  }
}

export default RequestPage;