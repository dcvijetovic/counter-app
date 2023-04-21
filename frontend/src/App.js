import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/styling.scss';

import LoginPage from './pages/LoginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage/HomePage';
import bg from './assets/background.jpg';

function App() {
  return (
    <>
      <div className="layout">
        <div className="layoutBg">
          <img src={bg} alt="Mountain" />
        </div>
        <div className="layoutOverlay"></div>

        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
