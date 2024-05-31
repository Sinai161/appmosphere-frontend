import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Nav = (props) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false)
    useEffect(()=> {
      if (localStorage.getItem('authToken') !==null) {
        setIsAuth(true)
      }
    }, [isAuth])
    
      const handleProfile = () => {
        navigate("/profile");
        
      }
      const handleFeed = () => {
        navigate("/feed");
      }

      const handleLogin = () => {
        navigate("/login");
      }

      const handleRegister = () => {
        navigate("/register")
      }

return (
    <nav className="bg-cyan-700  
    sticky top-0 z-50  
    p-4 text-black">
        <div className="flex items-center justify-between px-3 py-1">
          <h1 className="inline-block text-xl">Appmosphere</h1>
          <button onClick={() => handleRegister()}>Register</button>
          {isAuth ? <button onClick={() => handleFeed()}>Feed</button> : null}
          {isAuth ? <button className=""  onClick={() => handleProfile()} >Profile</button> : null}
          <button onClick={() => handleLogin()}>Login</button>
          <button  onClick={props.handleLogout} className="nav-button">Logout</button>

        </div>
    </nav>
)
}
export default Nav;