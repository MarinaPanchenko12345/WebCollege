import React, { useEffect, useState } from "react";
import "./BounceHeader.css";

const BounceHeader = ({ text }) => {
  const [bounceClass, setBounceClass] = useState("");

  useEffect(() => {
    setBounceClass("bounce-once");
  }, []);

  return (
    <div className='wrapper'>
      <h2
        className={`bounce ${bounceClass}`}
        style={{
          color: "#62b53f",
        }}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ marginRight: char === " " ? "0.01em" : "0" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default BounceHeader;
