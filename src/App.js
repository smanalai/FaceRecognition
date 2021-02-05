
import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Logo from './components/Logo/Logo';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Entry from './components/Entry/Entry';
import './App.css';



const app = new Clarifai.App({
  apiKey: '25dabbe2a6864ff096f28c9634ec7f10'
});



const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }              
}

const initialState = {
      input: '',
      imageUrl: '',
      box:[],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
}


class App extends Component{

  constructor() {
    super();
    this.state = initialState;
  }
  

  loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}

 calculateFaceLocation = (data) => {
   const clarifaiFace = data.outputs[0].data.regions.map( (box) => { return box.region_info.bounding_box})
   
   const image = document.getElementById('inputimage');
   const width = Number(image.width);
   const height = Number(image.height);
   const box = clarifaiFace.map((face) => {
   return {
   leftCol: face.left_col * width,
   topRow: face.top_row * height,
   rightCol: width - (face.right_col * width),
   bottomRow: height - (face.bottom_row * height)
   }
   
   }
   
   );
   return box;
}

  displayFaceBox = (box) => {
    this.setState({box:box});
  } 

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => {
      if(response){
        const faceNum = response.outputs[0].data.regions.length
        fetch('https://face-recognition-search-engine.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id,
            faceNum: faceNum
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
}



  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState)
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});

  }


  render(){
      const {isSignedIn, imageUrl, route, box} = this.state;
      return (
        <div className="App">
          <Particles className='particles'
           params={particlesOptions}
          />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          { route === 'home'
            ? <div> 
                <Logo/>
                <Entry
                  name={this.state.user.name}
                  entries={this.state.user.entries}/>
                <SearchBar 
                  onInputChange={this.onInputChange} 
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceDetection box={box} imageUrl={imageUrl}/> 
              </div>
            :(
              route === 'signin'
              ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>

              )
        }
        </div>
  );
}
}
    

export default App;


