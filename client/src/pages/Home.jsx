import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

const App = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [cart, setCart] = useState([]);

  const services = ['Service 1', 'Service 2', 'Service 3', 'Service 4'];

  const handleServiceSelect = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const addToCart = () => {
    setCart([...cart, ...selectedServices]);
    setSelectedServices([]);
  };

  const removeFromCart = (service) => {
    setCart(cart.filter((item) => item !== service));
  };

  return (
    <div className="hero is-fullheight is-bold has-background-primary" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome to My App</h1>
          <p className="subtitle">Select the services you're interested in:</p>
          <div className="columns is-multiline">
            {services.map((service) => (
              <div key={service} className="column is-one-quarter">
                <label className="checkbox">
                  <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => handleServiceSelect(service)} />
                  {service}
                </label>
              </div>
            ))}
          </div>
          <button className="button is-primary" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
      {cart.length > 0 && (
        <div className="hero-foot">
          <nav className="navbar is-light">
            <div className="container">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <button className="button is-primary" onClick={() => setCart([])}>Clear Cart</button>
                    <button className="button is-primary">Checkout ({cart.length} items)</button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <h2 className="title is-4">Items in Cart:</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
