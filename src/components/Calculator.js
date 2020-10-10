import React from "react";

import ThemeSwitcher from "./ThemeSwitcher";
import KeyPad from "./KeyPad";

const Calculator = () => {
  return (
    <main className="calculator">
      <ThemeSwitcher />
      <input type="text" value="1234567890" readOnly />
      <KeyPad />
    </main>
  );
};

export default Calculator;
