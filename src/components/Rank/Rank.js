import React from 'react';




const Rank = ({name, entries}) => {
	return (
		<div>
		  <div className='f3 fw6 pa3 ph0 mh0'>
		    {`${name}, your current entry count is...`}
		  </div>
		  <div className='fw6 ph0 pa3 mh0 f1'>
		    {entries}
		  </div>
		</div>
		
	);
}

export default Rank;


//plete_selector": "meta.tag - punctuation.definition.tag.begin, source - comment - string.quoted.double.block - string.quoted.single.block - string.unquoted.heredoc