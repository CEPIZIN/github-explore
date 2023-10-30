import { Userprops } from "./types/user";
import Search from "../components/Search";

import {useState} from 'react'

const Home = () =>{
    const [user, setUser] = useState<Userprops| null>(null);

    const loadUser = async(userName:string)=>{
        const res = await fetch(`https://api.githuib.com/users/${userName}`)
        const data = await res.json()
        console.log(data)
    }

    return(
        <div>
            <Search loadUser = {loadUser}/>
        </div>
    )
}

export default Home