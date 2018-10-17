import React, { Component } from "react";
import Donut from "./Donut.PNG";
import "./App.css";
import Quotes from "./Quotes.js";
import Lamp from "./Lamp";
import simpsons from "./simpsons.png"
import logo from "./logo.svg"

class Work extends Component {
 
}





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  render() {const iwork = this.state.working ? 'working' : 'noworking';


    return (
      <div>
      <div className="Homerworking">
        <button
        onClick={() => this.setState({ working: !this.state.working})}
        >{iwork}</button>
      </div>

      <div className="App">

        <header className="App-header">
        <img src={simpsons} className="App-simpsons" alt="simpsons" />
          <img src={Donut} className="App-Donut" alt="Donut" />
          <h1 className="App-title">¡Ay, caramba!</h1>
        </header>

        <Lamp on />
        <Lamp />
              <div className="Homerworking">
        <button
        onClick={() => this.setState({ working: !this.state.working})}
        >{iwork}</button>
      </div>
        <div className="Homerworking">
          <img src={logo} className={iwork} alt="logo" />
          <img src={logo} className={iwork} alt="logo" />
          </div>
        <Quotes />
      </div>
      </div>

    );
  }
}

export default App;

