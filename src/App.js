import React, { Component } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }


  render() {
    
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList {...this.props}/>
          <AddForm/>
        </main>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch)=> {
  return {
    fetchSmurfs: () => dispatch(fetchSmurfs()),
  }
}

const mapStateToProps = (state) => {
  return {
    smurfsArray : state.smurfs,
    isLoading : state.isLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.