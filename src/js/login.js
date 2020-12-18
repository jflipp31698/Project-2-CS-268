import React, {useState} from 'react';
import '../css/login.css';




export default function LoginPage(props){
    let [useremail, setEmail] = useState("");
    let [userpassword, setPassword] = useState("");
    //let errorMessage = useSelector(state => state.errorMessage);
    
    function login(){
        console.log(useremail); 
        console.log(userpassword);     
        // Axios.post('http://localhost:8080/', null, {params: {
        //   useremail: useremail,
        //   userpassword: userpassword
        // }})
        
        // .then(function (repsonse){
        //   console.log(repsonse.data) 
        // })
      }

    return(
        <div id="login-container">
            <div id="login-header">UWEC Freshman Connect</div>
            <div id="login-form-container">
                <div id="login-form-header">LOGIN</div>
                    <div className="login-form-input-grp">
                        <label className="login-label">Email: </label>
                        <input className="login-input" type="textbox" value={useremail} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="login-form-input-grp">
                        <label className="login-label">Password: </label>
                        <input className="login-input" type="password" value={userpassword} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <button id="login-btn" onClick={login}>Login</button> 
                </div>
             </div>
    )
}