import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {useState} from "react";
import SignIn from './pages/SignIn';
import Otp from './pages/Otp';
import UserDetails from './pages/UserDetails';
import CertificateList from './pages/CertificateList';

function App() {
  const [username, setUsername] = useState("ABC")
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<SignIn/>} />
    <Route exact path="/otp" element={<Otp/>}/>
    <Route exact path="/user-details" element={<UserDetails username={username} />}/>
    <Route exact path="/certificate-list" element={<CertificateList username={username} />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
