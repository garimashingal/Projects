import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import PhoneDirectory from "./PhoneDirectory";

function Wrapprer() {
  const navigate = useNavigate();
  return (
    <PhoneDirectory
      navigatePageHandler={(path) => {
        navigate(path);
      }}
    />
  );
}

export default Wrapprer;
