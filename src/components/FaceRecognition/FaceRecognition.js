import react from 'react';
import './FaceRecognitoin.css';


const FaceRecognition = ({initialState}) => {
	return (
		<div className='center ma pa2'>
		  <div style={{position:"relative"}}>
		    <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
		    {
		    	boxes.map((box, i) => {
		    		const {topRow, rightCol, bottomRow, leftCol} = box;
		    		return (<div key={i} id="face" className="bounding-box" style={{top:topRow, right:rightCol, bottom:bottomRow, left:leftCol}}></div>);
		    	})
		    }
		  </div>
		</div>
	);
}

export default FaceRecognition;