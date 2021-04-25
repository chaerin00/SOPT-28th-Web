import React,{useState} from 'react';

const SearchBar=({getData})=>{
    const [userName,setUserName]=useState(null);

    const changeHandler=e=>{
        e.preventDefault();
        setUserName(e.target.value);
        console.log(userName);
    }
    return(
        <form>
            <input type='text' value={userName} onChange={changeHandler} onSubmit={()=>getData(userName)}></input>
        </form>
    )
}

export default SearchBar;
