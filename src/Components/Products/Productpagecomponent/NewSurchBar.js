import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
const NewSurchBar = ({value,changInput}) => {
  return (
    <div className='scrchbar-wrap'>
     <SearchIcon className='searchBar-icon' />
      <input type="text" placeholder='Woodland Hills' value={value} onChange={changInput} />
    </div>
  )
}

export default NewSurchBar
