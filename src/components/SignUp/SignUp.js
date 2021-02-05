import React from 'react';


class SignUp extends React.Component {

	constructor(props){
	super(props);
	this.state = {
		email: '',
		password: '',
		name: ''
	}
}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	} 
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswrodChange = (event) => {
		this.setState({password: event.target.value})
	}


	onSubmitSignIn = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
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
		return(
	  	  <div className="container">
	  	    <div className="row justify-content-between">
	  	      <div className="content-left">
	  	        <h1> Face Search Engine</h1>
	  	        <h2> Let's detect faces in your pictures</h2>
	  	      </div>
	  	      <div className="content-right">
			  	<article className="br3 ba b--black-10 mv4 mw5 shadow-5 center">
				  	<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f4 center fw6 ph0 mh0">Sign Up</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="text" 
					        name="name"  
					        id="name"
					        onChange={this.onNameChange}/>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="email-address"  
					        id="email-address"
					        onChange={this.onEmailChange}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
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
					      	value="Sign Up"/>
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


export default SignUp;