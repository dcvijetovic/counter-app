import { useNavigate } from 'react-router-dom';
import '../../style/styling.scss';
import { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:3001/encoder',
        {
          input,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="page">
      <main>
        <h1>
          Enter string<span>.</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="string"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text"
          />
          <div className="result">
            <h2>{result}</h2>
          </div>
          <button type="submit">Encode</button>
        </form>
      </main>
      <button onClick={handleLogout} className="logoutBtn">
        Logout
      </button>
    </div>
  );
};

export default HomePage;
