
import { useNavigate } from "react-router-dom"
import './LoginSignUp.css'
const LoginSignUp = () =>{
    const navigate = useNavigate();
    return (
        
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button onClick={()=>navigate("/")}>Continue</button>
                <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terrms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp