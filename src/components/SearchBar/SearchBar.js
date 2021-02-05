import react from 'react';
import './SearchBar.css';




const SearchBar = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
		  <p className='f4 db pa2 lh-copy'>
	 		{"Insert an image URL below to detect location of faces in the picture"} 
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

export default SearchBar;


