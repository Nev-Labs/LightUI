import React from "react";

const Models = ({ onData }) => {
  const handleSelect = (model) => {
    onData(model);
  };

  return (
    <div>
      <button onClick={() => handleSelect("gpt-3.5")}>GPT-3.5</button>
      <button onClick={() => handleSelect("gpt-4")}>GPT-4</button>
    </div>
  );
};

export default Models;
