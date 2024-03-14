import React from 'react';

const App = () => (
  <div style={{ backgroundImage: 'url(client/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
    <div className="container">
      <h1>Welcome to My App</h1>
      <p>This is a paragraph.</p>
    </div>
  </div>
);

export default App;