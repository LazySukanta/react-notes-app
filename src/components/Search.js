import React from 'react';
// import { MdSearch } from 'react-icons/md';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<SearchIcon className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
