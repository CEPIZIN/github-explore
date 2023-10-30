import { Userprops } from "./types/user";
import Search from "../components/Search";

import {useState} from 'react'


const Home = () =>{
    const [user, setUser] = useState< Userprops | null>(null);

    const loadUser = async (userName: string) => {
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            if (!res.ok) {
                throw new Error('Fail');
            }
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <div>
            <Search loadUser = {loadUser}/>
        </div>
    )
}

export default Home