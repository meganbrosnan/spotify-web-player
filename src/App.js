import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Login from './Login';
import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
    console.log('token: ', token)

  }, []);

  return (
    <div className="App">
      {
        (token === '') ? <Login/>
        : <h1>You're Logged In</h1>
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>

        { (token === "") ? <h1>Login</h1> : <h1>You're logged in</h1> }

      </div> */}
    </div>
  );
}

export default App;
