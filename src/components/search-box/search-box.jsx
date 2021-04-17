import React from 'react';
import './search-box.css'

export const SearchBox = (props) => {
  const { 
    placeHolder,
    handleTextChange, 
  } = props;
  return <input 
  className="search-box"
        type="search" 
      placeHolder={placeHolder}
        onChange={handleTextChange}/>
}