import React from "react";

const Difficulty = props => {
  const showDifficulty = props.difficulty;

  if (showDifficulty) {
    return (
      <div>
        <select className="selection-outcome winner" id="outcome1">
          <option className="winner" value="winner">
            Winner
          </option>
          <option className="lost" value="lost">
            Lost
          </option>
          <option className="void" value="void">
            Void
          </option>
        </select>
      </div>
    );
  } else {
    return null;
  }
};

export default Difficulty;
