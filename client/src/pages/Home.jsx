import { useState, useEffect } from 'react';
import backgroundImage from '/assets/homepageimage.jpg';

const Home = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [emojis, setEmojis] = useState([
    { emoji: '🚗', top: '50%', left: '50%', opacity: 0 },
    { emoji: '🚜', top: '50%', left: '50%', opacity: 0 },
    { emoji: '🛤️', top: '50%', left: '50%', opacity: 0 },
    { emoji: '🌳', top: '50%', left: '50%', opacity: 0 },
    { emoji: '🌸', top: '50%', left: '50%', opacity: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmojis = emojis.map((emoji) => ({
        ...emoji,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 1,
      }));
      setEmojis(newEmojis);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero is-fullheight is-bold" style={backgroundStyles}>
      <div className="hero-body" style={{ position: 'relative' }}>
        <div className="container">
          <h1 className="title is-1 has-text-centered" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.6)', position: 'relative' }}>
            Welcome to <span style={{ color: '#48c774' }}>Green Haven Landscaping</span>, where beauty meets nature!
            {emojis.map((emoji, index) => (
              <span
                key={index}
                role="img"
                aria-label={emoji.emoji}
                style={{
                  position: 'absolute',
                  top: emoji.top,
                  left: emoji.left,
                  opacity: emoji.opacity,
                  fontSize: index === 0 || index === 1 ? '40px' : '30px',
                  transition: 'top 2s, left 2s, opacity 0.5s',
                }}
              >
                {emoji.emoji}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
