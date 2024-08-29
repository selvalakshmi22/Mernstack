import React, { useState } from 'react';

function MeaningFinder() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    // Call the API when the button is clicked
    fetch(`https://api.agify.io/?name=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        // Print the API response in the console
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching the API:', error);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a name"
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleButtonClick} style={{ padding: '5px 10px' }}>
        Find Meaning
      </button>
    </div>
  );
}

export default MeaningFinder;
