import { useState } from 'react';
import '../../style/styling.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function isEmailValid(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  function isPasswordValid(password) {
    const regex = /^(?=.*\d).{6,}$/;
    return regex.test(password);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email) || !isPasswordValid(password)) {
      setMessage('Invalid email or password');
      return;
    } else {
      try {
        const response = await axios.post('http://localhost:3001/login', {
          email,
          password,
        });

        localStorage.setItem('token', response.data.token);
        navigate('/');
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="page">
      <main>
        <h4>Digihey</h4>
        <h1>
          Single digit counter<span>.</span>
        </h1>
        <h3>Login to count your digits</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {message && <p>{message}</p>}
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
