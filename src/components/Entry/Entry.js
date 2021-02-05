import React from 'react';




const Entry = ({name, entries}) => {
	return (
		<div>
		  <div className='f2 fw6 pa5 ph0 mh0'>
		    {`${name}, your current entry count is ${entries} `}
		  </div>
		</div>
		
	);
}

export default Entry;


//plete_selector": "meta.tag - punctuation.definition.tag.begin, source - comment - string.quoted.double.block - string.quoted.single.block - string.unquoted.heredoc