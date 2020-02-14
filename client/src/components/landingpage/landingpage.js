import React from 'react'; 
import {Link} from 'react-router-dom';

import '../../styles/landing.css';

class Landing extends React.Component{
    render(){
        return(
            <div className="main">
					<div className= "centered">
						<div className = "signUpHeader">
							<h1>Stock Portfolio App</h1>
						</div>
						<div className = "signUpForm">
							<Link to = "/signin">
								<button className = "logInButton"  name = "logIn">Log In</button>
							</Link>
							<Link to ="/signup">
								<button className = "signUpButton"  name = "signUp">Sign Up</button>
							</Link>	
						</div>
					</div>
				</div>
        )
    }
}

export default Landing;