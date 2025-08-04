import React, { useState } from 'react';

const FlamesApp = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [result, setResult] = useState('');

    const calculateRelationship = () => {
        if (!name1 || !name2) {
            setResult('Please Enter valid input');
            return;
        }

        // Step 1: Remove common letters
        let str1 = name1;
        let str2 = name2;

        for (let char of name1) {
            if (str2.includes(char)) {
                str1 = str1.replace(char, '');
                str2 = str2.replace(char, '');
            }
        }

        // Step 2: Calculate the sum of lengths of remaining strings
        const remainingLength = str1.length + str2.length;
        const relationshipIndex = remainingLength % 6;

        // Step 3: Determine relationship status
        switch (relationshipIndex) {
            case 1:
                setResult('Friends');
                break;
            case 2:
                setResult('Love');
                break;
            case 3:
                setResult('Affection');
                break;
            case 4:
                setResult('Marriage');
                break;
            case 5:
                setResult('Enemy');
                break;
            case 0:
                setResult('Siblings');
                break;
            default:
                setResult('Please Enter valid input');
                break;
        }
    };

    const clearInputs = () => {
        setName1('');
        setName2('');
        setResult('');
    };

    return (
        <div>
            <h1>Flames App</h1>
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
                onClick={calculateRelationship}
            >
                Calculate Relationship
            </button>
            <button
                data-testid="clear"
                name="clear"
                onClick={clearInputs}
            >
                Clear
            </button>
            <h3 data-testid="answer">{result}</h3>
        </div>
    );
};

export default FlamesApp;