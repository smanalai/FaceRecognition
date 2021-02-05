import React from 'react';
import './Login.css';


class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}


	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}
	onPasswrodChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			}
		})
	}

	render(){
	  const {onRouteChange} = this.props;
	  return(
	  	<div className="container">
	  	  <div className="row justify-content-between">
	  	    <div className="content-left">
	  	      <h1> Face Search Engine</h1>
	  	      <h2> Let's detect faces in your pictures</h2>
	  	    </div>
	  	    <div className="content-right">
			  	<article className="br3 ba b--black-10 mv4 mw5 shadow-5 ">
				  	<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f4 center fw6 ph0 mh0">Log In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address"
					        	onChange={this.onEmailChange}/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password"
					        	onChange={this.onPasswrodChange}/>
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	onClick={this.onSubmitSignIn}
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Log In"/>
					    </div>
					    <div className="lh-copy mt3">
					      <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Create New Account</p>
					    </div>
					  </div>
					</main>
				</article>
			</div>
		  </div>
		</div>
		);
}
}

export default Login;