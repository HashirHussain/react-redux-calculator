import React from "react";
import KeyPad from "./KeyPad";

const Calculator = () => {
  return (
    <main className="calculator">
      <input type="text" value="1234567890" readOnly />
      <KeyPad />
    </main>
  );
};

export default Calculator;
