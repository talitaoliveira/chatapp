import React, { useState } from "react";
import * as chat from "../../lib/chat";


const Login = (props) => {

  const [username, setUsername] = useState('');
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [user, setUser] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    if (username !== '') {
      e.preventDefault();
      login();
    }
  }

  const login = () => {
    chat.login(username).then( user => {
      setUser({isAuthenticated: true})
    }).catch( error => {
      setErrorMessage("Please enter a valid username");
      console.log(error)
    })
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <span>{errorMessage}</span>
        <input type="submit" disabled={username === ""} value="LOGIN" />
      </form>
    </div>
  );
}

export default Login;