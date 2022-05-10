import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
<section className="mainspace">
      
        <div className="poss">
            <img src="./w-icon/connectskillz 1.svg" alt="" className="logo-lg"/>
            <div className="login-1">
            
                <div className="log_case">
  
                    <div className="log-ctnt">
                        <h1>LOG IN TO YOUR DASHBOARD</h1>
                        <p>Stay updated and learn continuously</p>
                    </div>
                    <form action="" className="lg-form">
                        <div className="mail-log">
                            <input type="email" placeholder="Email Address"/>
                        </div>
                        <div className="pass-log">
                            <input type="password" placeholder="Password" name="view" />
                            <img src="./w-icon/view.svg" alt="viewit"/>
                        </div>
                        <p className="forget"><a href="#">forgot password?</a></p>
                        <button className="login-btn">Join</button>
                    </form>
                </div>
            </div>
    
        </div>
       
        <div className="banner1">
            
        </div>
    </section>
    </div>
  )
}

export default Login