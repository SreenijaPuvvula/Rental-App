import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate();
    function goToLink(){
        navigate("/buySell")
    }
    return(
      <div>
        <form className="loginForm">
        <div>
            <h1>Login</h1>
        </div>
          <div>
           <label for="fname">First name</label>
           <br/>
           <input type="text" name="fname"/>
          </div>
          <div>
            <label for="lname">Last name</label>
            <br/>
            <input type="text" name="lname"/>
          </div>
          <div>
            <label for='email'>Email</label>
            <br/>
            <input type="email" name="email"/>
          </div>
          <div>
            <label for="phno">Phone number</label>
            <br/>
            <input type="tel" name="phno"/>
          </div>
          <div>
             <button type="submit" onClick={goToLink}>Submit</button>
          </div>
        </form>
      </div>
    );
}