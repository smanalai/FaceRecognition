import react from 'react';
import Tilt from 'react-tilt'
import face from './face.png'; 
import './Logo.css';


// ToDo: read more about Tilt and what you can do with it. Change the logo from alien to something else
const Logo = () => {
	return (
		<div className='ma4 mt0'>
		  <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }}>
		   <div className="Tilt-inner"></div>
		   <img  alt='logo' src={face}/>
		  </Tilt>
		</div>
		
	);
}

export default Logo;

