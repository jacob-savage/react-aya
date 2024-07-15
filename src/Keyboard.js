import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardComp = ({
  inputValue,
  setInputValue,
  minLength,
  maxLength,
  counter,
  setCounter,
  testingWord,
}) => {
  const onKeyPress = (input) => {
    const newInput = inputValue + input;
    if (
      input === "{enter}" &&
      counter <= 5 &&
      inputValue.length === 5 * counter + 5
    ) {
      setCounter(counter + 1);
    }
    if (inputValue.length < maxLength && /^[a-zA-Z]+$/.test(input)) {
      setInputValue(newInput);
    }
    if (
      inputValue.length <= maxLength &&
      inputValue.length > minLength &&
      input === "{bksp}"
    ) {
      setInputValue(inputValue.slice(0, inputValue.length - 1));
    }
  };

  const onChange = (input) => {};

  const layout = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{bksp} z x c v b n m {enter}",
  ];

  const distinctLetters = (color, testingWord) => {
    const letters = inputValue.slice(0, minLength).split("");
    const testingWordArr = testingWord ? testingWord.split("") : [""];
    const returnArr = ["A"];

    if (color === "green") {
      letters.forEach((item, index) => {
        if (item === testingWordArr[index % 5]) {
          returnArr.push(item);
        }
      });
    }
    if (color === "orange") {
      letters.forEach((item, index) => {
        if (testingWordArr.includes(item) && testingWordArr[index % 5] !== item) {
          returnArr.push(item);
        }
      });
    }
    if (color === "darkgrey") {
      letters.forEach((item) => {
        if (!testingWordArr.includes(item)) {
          returnArr.push(item);
        }
      });
    }
    return [...new Set(returnArr)].join(" ");
  };

  const keyboardSettings = () => {
    return [
      {
        class: "hg-orange",
        buttons: distinctLetters("orange", testingWord),
      },
      {
        class: "hg-darkgrey",
        buttons: distinctLetters("darkgrey", testingWord),
      },
      {
        class: "hg-green",
        buttons: distinctLetters("green", testingWord),
      },
    ];
  };

  return (
    <>
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
          default: layout,
        }}
        display={{ "{enter}": "return", "{bksp}": "backspace" }}
        buttonTheme={keyboardSettings()}
      />
    </>
  );
};

export default KeyboardComp;
