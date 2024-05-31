import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './pages/Profile';
import Nav from "./components/Nav";
import Feed from './pages/Feed';
import FeedForm from './pages/FeedForm';
import ProfileForm from './pages/ProfileForm';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("authToken"))
  const navigate = useNavigate()
  const URL = process.env.REACT_APP_URL

  const handleLogin = async (user) => {
    const response = await fetch(URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    if (response.status !== 200) {
      return data;
    }
    localStorage.setItem("authToken", data.token);
    setIsLoggedIn(true);

    navigate(`/profile`);
  };
  const handleSignUp = async (user) => {
    const response = await fetch(URL + "api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);
    navigate("/login");
  };

  const handleLogout = () => {
    console.log(" in handle log");
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // const [user, setUser] = useState(null);

  // const fetchUser = async (id) => {
  //   const token = localStorage.getItem("authToken");
  //   if (token) {
  //     const response = await fetch(URL + `user/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json();
  //     setUser(data.data);
  //   } else {
  //     console.log("no token");
  //   }
  // };

  useEffect(() => {
    let token = localStorage.getItem("authToken");

    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleSignUp={handleSignUp} />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<FeedForm />} />
        <Route path="/create" element={<ProfileForm/>}/>
      </Routes>

    </div>
  )
}

export default App;
