import React from 'react';




const Rank = ({name, entries}) => {
	return (
		<div>
		  <div className='white f3'>
		    {`${name}, your current entry count is...`}
		  </div>
		  <div className='white f1'>
		    {entries}
		  </div>
		</div>
		
	);
}

export default Rank;


//plete_selector": "meta.tag - punctuation.definition.tag.begin, source - comment - string.quoted.double.block - string.quoted.single.block - string.unquoted.heredoc