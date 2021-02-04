import react from 'react';
import './ImageLinkForm.css';




const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
		  <p className='f3 db pa3 lh-copy'>
	 		{"Copy and paste an image URL below to detect the location of the face in the picture"} 
 		  </p>
		  <div className='center'>
		    <div className='form center pa4 br3 shadow-5'>
		 	<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
		 	<button 
		 		className='w-30 grow f4 link ph3 pv dib white bg-blue'
				onClick={onButtonSubmit}		 		
		 	> Detect</button>
		 	</div>
		  </div>
		</div>
		
	);
}

export default ImageLinkForm;


//plete_selector": "meta.tag - punctuation.definition.tag.begin, source - comment - string.quoted.double.block - string.quoted.single.block - string.unquoted.heredoc