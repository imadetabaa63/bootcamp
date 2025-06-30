import React, { useState, useEffect } from 'react';
import quotes from './quotes';

const getRandomQuote = (currentQuoteIndex) => {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === currentQuoteIndex);
  return index;
};

const getRandomColor = () => {
  const colors = [
    '#f94144', '#f3722c', '#f8961e', '#f9c74f',
    '#90be6d', '#43aa8b', '#577590', '#4a4e69'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const handleNewQuote = () => {
    const newIndex = getRandomQuote(quoteIndex);
    setQuoteIndex(newIndex);
    setColor(getRandomColor());
  };

  const { quote, author } = quotes[quoteIndex];

  return (
    <div style={{
      color: color,
      transition: 'all 0.5s ease',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '600px',
        boxShadow: `0 0 10px ${color}`
      }}>
        <h2>"{quote}"</h2>
        <p style={{ fontStyle: 'italic' }}>— {author || "Inconnu"}</p>
        <button
          onClick={handleNewQuote}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: color,
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Nouvelle citation
        </button>
      </div>
    </div>
  );
}

export default App;
