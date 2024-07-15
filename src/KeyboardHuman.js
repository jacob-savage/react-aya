import React, { useEffect } from "react";

const KeyboardHuman = ({
  inputValue,
  setInputValue,
  counter,
  setCounter,
  maxLength,
  minLength,
}) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // handle enter
      if (
        event.key === "Enter" &&
        counter <= 5 &&
        inputValue.length === 5 * counter + 5
      ) {
        setCounter((prevCounter) => prevCounter + 1);
      }
      // backspace

      console.log(event.key)
      if (
        inputValue.length <= maxLength &&
        inputValue.length > minLength &&
        event.key === "Backspace"
      ) {
        setInputValue(inputValue.slice(0, inputValue.length - 1));
      }

      // input letters 
      const key = event.key.toLowerCase();
      if (
        key.length === 1 &&
        key >= "a" &&
        key <= "z" &&
        inputValue.length < maxLength &&
        /^[a-zA-Z]+$/.test(key)
      ) {
        setInputValue((prevValue) => prevValue + key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setInputValue, counter, inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        readOnly
        style={{ display: "none" }}
      />
      <div className="display">{inputValue}</div>
    </div>
  );
};

export default KeyboardHuman;
