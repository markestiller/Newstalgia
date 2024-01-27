import React, { useState } from "react";
import hamtaro from "../assets/hamtaro.png";

const Hamtaro = ({ searchResult }) => {
  const [summary, setSummary] = useState("");

  return (
    <div>
      <img src={hamtaro} />
    </div>
  );
};

export default Hamtaro;
