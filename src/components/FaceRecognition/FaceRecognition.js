import react from 'react';
import './FaceRecognitoin.css';


const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma pa2'>
		  <div style={{position:"relative"}}>
		    <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
		    {
		    	box.map((item, i) => {
		    		const {topRow, rightCol, bottomRow, leftCol} = item;
		    		return (<div key={i} id="face" className="bounding-box" style={{top:topRow, right:rightCol, bottom:bottomRow, left:leftCol}}></div>);
		    	})
		    }
		  </div>
		</div>
	);
}

export default FaceRecognition;