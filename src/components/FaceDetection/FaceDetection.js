import react from 'react';
import './FaceDetection.css';


const FaceDetection = ({imageUrl, box}) => {
	 const faces = box.map((face, i) => {return <div key={i} className='bounding-box' style={{top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol}}></div>})
	 return (
	 <div className='center ma'>
	 <div className='absolute mt2'>
	 <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
	 {faces}
	 </div>
	 </div>
	 );
}

export default FaceDetection