import "./Register.css"

export default function Register() {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Interact Hub</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Interact Hub.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input placeholder="UserName" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">Log Into Account</button>


            </div>
        </div>
    </div>
    
    

      
    </div>
  )
}
