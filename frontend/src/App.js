import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from './screens/marketplace/marketplace';
import Profile from './screens/profile/profile';
import Upload from './screens/upload/upload';
import Clothing from './screens/clothing/clothing';
import Wallet from './screens/wallet/wallet';
import YourImpact from './screens/yourImpact/yourImpact';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/clothing/:clothingId" element={<Clothing />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/yourImpact" element={<YourImpact />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/account' element={<Protected> <Account /></Protected> }
          />
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
