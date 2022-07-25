import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./Components/Pages/MainPage";
import TradePage from "./Components/Pages/TradePage";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import TransferPage from "./Components/Pages/TransferPage";
import HistoryPage from "./Components/Pages/HistoryPage";

function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<MainPage />} />

              <Route path="/trade" element={<TradePage />} />
              <Route path="/transfer" element={<TransferPage />} />
              <Route path="/history" element={<HistoryPage />} />

              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
          </Routes>
      </div>
  );
}

export default App;
