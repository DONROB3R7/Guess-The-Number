import React from "react";

const ButtonPlay = props => {
  const showButton = props.playButton;

  const _playGame = () => {
    props.Show();
  };

  // check if you need to show the button or hide
  if (showButton) {
    return null;
  } else {
    return <button onClick={_playGame}>Play</button>;
  }
};

export default ButtonPlay;
