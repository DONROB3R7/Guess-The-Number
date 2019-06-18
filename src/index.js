import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonPlay from "./component/button";
import Difficulty from "./component/difficulty";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Keep the defaul information
    this.state = {
      playButton: false,
      difficultyChose: false
    };
  }

  // Hide the button and reveal the option for difficulty
  showContent = () => {
    this.setState({
      playButton: true,
      difficultyChose: true
    });
  };

  render() {
    return (
      <div className="wrapper_body">
        <div className="wrapper_nav">
          <h1 className="title">Guess The Number</h1>
        </div>
        <div className="wrapper_content">
          <div>
            <ButtonPlay
              playButton={this.state.playButton}
              Show={this.showContent}
            />
            <Difficulty difficulty={this.state.difficultyChose} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
