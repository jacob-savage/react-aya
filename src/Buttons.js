import React from "react";

const getButtonColor = (index, value, testingWord, counter) => {
  if (index >= counter * 5 || value === undefined) {
    return "darkgrey";
  }
  if (value === testingWord[index % 5]) {
    return "green";
  }
  if (testingWord.includes(value)) {
    return "orange";
  }
  return "grey";
};

const ButtonsComp = ({ inputValue, testingWord, counter }) => {
  const buttons = Array.from({ length: 30 }, (_, index) => (
    <button
      key={index}
      className="my-button"
      style={{
        backgroundColor: getButtonColor(
          index,
          inputValue[index],
          testingWord,
          counter
        ),
      }}
    >
      {inputValue[index] || ""}
    </button>
  ));

  return <div className="wordle">{buttons}</div>;
};

export default ButtonsComp;
