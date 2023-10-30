/* eslint-disable @typescript-eslint/no-unused-vars */

type SearchProps ={
    loadUser: (userName: string) => Promise<void>
}
import {useState} from "react";
import { BsSearch } from "react-icons/bs"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Search = ({ loadUser }: SearchProps) => {
    const [userName,setUserName] =useState("")
    return (
        <div>
            <h2>Search for the user</h2>
            <p>know your best repositories</p>
            <div>
                <input type="text" placeholder='Insert the username' />
                <button>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search
