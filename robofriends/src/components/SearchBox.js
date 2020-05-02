import React from 'react';

const SearchBox=({searchfeild,searchChange})=>{
    return(
        <div className='pa2 tc'>
        <input 
        type='search' 
        className=' tc bg-light-green br3 pa2 ma2 dib bw2 shadow-5'
        placeholder='search Robots'
        onChange={searchChange}
        ></input>
        </div>
    );
}

export default SearchBox;