import React, { Component } from "react";
import "./App.css";
import { FETCHING_SMURF_START } from "../actions/index"
import { connect } from "react-redux"
import NewSmurf from "./NewSmurf"
import DeleteSmurf from "./DeleteSmurf";
class App extends Component {
  constructor(props) {
    super();
    this.state = ({ actionFunc: props.FETCHING_SMURF_START, isLoading: props.isLoading })
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={this.state.actionFunc}>Get Smurf</button>
        {this.props.isLoading && <div>Loading...</div>}
        {this.props.smurf && <div>{this.props.smurf.map(ele => (<div>
          <div>ID: {ele.id}</div>
          <div>Name: {ele.name}</div>
          <div>Age: {ele.age}</div>
          <div>Height: {ele.height}</div>

        </div>))}</div>}
        <NewSmurf />
        <DeleteSmurf />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurf: state.smurf
  }
}

export default connect(mapStateToProps, { FETCHING_SMURF_START })(App);
