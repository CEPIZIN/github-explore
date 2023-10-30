import React from 'react';
import {BsSearch} from "react-icons/bs"

const Search = () =>{
    return(
       <div>
        <h2>Search for the use</h2>
        <p>know your best repositories</p>
        <div>
            <input type="text" placeholder='Insert the username'/>
            <button>
                <BsSearch />
            </button>
        </div>
       </div> 
    )
}

export default Search