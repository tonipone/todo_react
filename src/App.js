import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
    render(){
        return(
            <div className="App">
            <h1> Hello, World! </h1>
                <p>Start Configuration React manual</p>
        </div>
    );
    }
}

export default hot(module)(App);
