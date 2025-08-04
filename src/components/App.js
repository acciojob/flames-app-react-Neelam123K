import React from "react";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [answer, setAnswer] = useState("");
  const answerArray = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];
  function getMappedValues(str) {
    const map = new Map();
    for (let char of str) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  }
  function getRemovedValues(char1, char2) {
    for (let [char, count] of char1.entries()) {
      if (char2.get(char)) {
        const minCount = Math.min(count, char2.get(char));
        char1.set(char, count - minCount);
        char2.set(char, char2.get(char) - minCount);
      }
    }
  }
  function getFinalSum(map) {
    let sum = 0;
    for (let val of map.values()) {
      sum += val;
    }
    return sum;
  }
  const calculateRelationShip = (e) => {
    e.preventDefault();
    setAnswer("")
    if (firstName === "" || secondName === "") {
      setAnswer("Please Enter valid input");
      return;
    }
    const firstNameMap = getMappedValues(firstName);
    const secondNameMap = getMappedValues(secondName);
    getRemovedValues(firstNameMap, secondNameMap);
    const total = getFinalSum(firstNameMap) + getFinalSum(secondNameMap);
    setAnswer(answerArray[total%6])
  };
  return (
    <div>
      <input
        data-testid="input1"
        name="name1"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        data-testid="input2"
        name="name2"
        placeholder="Enter second name"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateRelationShip}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        name="clear"
        onClick={(e) => {
          setAnswer("");
          setFirstName("");
          setSecondName("");
        }}
      >
        Clear
      </button>
      <h3 data-testid="answer">{answer}</h3>
    </div>
  );
}

export default App;