import React, { useState } from "react";
import Body from "./Body.jsx";
import ClearChat from "./ClearChat.jsx";

function HandleModels() {
  const [mname, setMname] = useState("");

  function handleModelSelection(model) {
    setMname(model);
  }

  return (
    <>
      <ClearChat onClearChat={() => setMname("")} />
      <Body n={mname} />
    </>
  );
}

export default HandleModels;
