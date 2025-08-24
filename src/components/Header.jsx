import { useState } from "react";
import { LOGO } from "../../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus= useOnlineStatus();
    return (
        <div className='header'>
            <div className='logo-container'>
              <img className='logo' src={LOGO}></img>
            </div>
            <div className='nav-items'>
                <ul>
                  <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                  <li><Link to='/cart'>Card</Link></li>
                  <button className="login" onClick={() => {
                    btnName === "Login" ? setBtnName('Logout'): setBtnName('Login');
                  }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
