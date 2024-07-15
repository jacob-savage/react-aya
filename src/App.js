import React, { useState, useEffect } from "react";
import ButtonsComp from "./Buttons";
import KeyboardComp from "./Keyboard";
import KeyboardHuman from "./KeyboardHuman";
import { words } from "./words";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [testingWord, setTestingWord] = useState(null);
  const [counter, setCounter] = useState(0);

  var maxLength = counter * 5 + 5;
  var minLength = maxLength - 5;

  // setting the random word and ensuring that is does not change
  useEffect(() => {
    const testingWordIndex = Math.floor(Math.random() * words.length);
    setTestingWord(words[testingWordIndex]);
  }, []);

  return (
    <>
      <h1 className="heading">Wordle!!</h1>
      <div className="letter_grid">
        <ButtonsComp
          inputValue={inputValue}
          testingWord={testingWord}
          counter={counter}
        />
      </div>
      <div></div>
      <div className="keyboard_container">
        <KeyboardComp
          inputValue={inputValue}
          setInputValue={setInputValue}
          minLength={minLength}
          maxLength={maxLength}
          counter={counter}
          setCounter={setCounter}
          testingWord={testingWord}
        />
      </div>
      <div>
        <KeyboardHuman
          inputValue={inputValue}
          setInputValue={setInputValue}
          counter={counter}
          setCounter={setCounter}
          maxLength={maxLength}
          minLength={minLength}
        />
      </div>
      <div style={{color :'white'}}>{testingWord}</div>
    </>
  );
}

export default App;
