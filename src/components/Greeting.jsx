import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  const buttonStyles = {
    background: '#a6e22e',
    border: 'none',
    color: 'black',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '17px',
    margin: '10px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    fontFamily: 'monospace',
  };

  const [hoverColor, setHoverColor] = useState('');

  const handleHover = () => {
    const colors = ['#ff4136', '#0074d9', '#b10dc9', '#2ecc40', '#ff851b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
  };

  return (
    <div style={{ textAlign: '' }}>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        style={{ ...buttonStyles, backgroundColor: hoverColor }}
        onMouseEnter={handleHover}
        onMouseLeave={() => setHoverColor('')}
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}

