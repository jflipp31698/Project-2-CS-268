import React, {useState} from 'react';
import '../css/Login.css';




export default function LoginPage(props){
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    //let errorMessage = useSelector(state => state.errorMessage);

    function login(){
    // this function is here to handle the login stuff with the backend when we get there 
      console.log(email); 
      console.log(password);     
    }
    return(
            
            <div id="login-container">
                <div id="login-header">UWEC Freshman Connections</div>
                <div id="login-form-container">
                    <div id="login-form-header">LOGIN</div>
                    <div className="login-form-input-grp">
                        <label className="login-label">Email: </label>
                        <input className="login-input" type="textbox" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="login-form-input-grp">
                        <label className="login-label">Password: </label>
                        <input className="login-input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <button id="login-btn" onClick={login}>Login</button> 
                </div>
             </div>
        )
}