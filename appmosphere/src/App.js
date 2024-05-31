import './App.css';
import {Routes, Route, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("authToken"))
    const navigate = useNavigate()
    const URL = "http://localhost:8000/"

    const handleLogin = async (user) => {
      const response = await fetch(URL + "api/login", {
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
  
      navigate(`/`);
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
  
    // const handleLogout = () => {
    //   console.log(" in handle log");
    //   localStorage.removeItem("authToken");
    //   setIsLoggedIn(false);
    //   navigate("/");
    // };

  //   const [user, setUser] = useState(null);

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
          <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register handleSignUp={handleSignUp} />} />
            {/* <nav path="/profile" element={<Profile fetchUser{fetchUser} user={user}>}></nav> */}
          </Routes>

      </div>
  )
}

export default App;
