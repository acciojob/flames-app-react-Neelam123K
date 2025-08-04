import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const flamesMap = {
    1: 'Friends',
    2: 'Love',
    3: 'Affection',
    4: 'Marriage',
    5: 'Enemy',
    0: 'Siblings',
  };

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult('Please Enter valid input');
      return;
    }

    let name1Arr = name1.split('');
    let name2Arr = name2.split('');

    for (let i = 0; i < name1Arr.length; i++) {
      const charIndex = name2Arr.indexOf(name1Arr[i]);
      if (charIndex !== -1) {
        name1Arr[i] = '';
        name2Arr[charIndex] = '';
      }
    }

    const remainingLettersCount = 
      name1Arr.filter(c => c !== '').length + 
      name2Arr.filter(c => c !== '').length;

    const flamesResult = flamesMap[remainingLettersCount % 6];
    setResult(flamesResult);
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={handleCalculate}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        name="clear"
        onClick={handleClear}
      >
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default FlamesGame;
