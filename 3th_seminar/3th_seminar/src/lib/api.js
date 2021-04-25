import axios from "axios";

export const getUserData=async(name)=>{
    const data=await axios.get("https://api.github.com/users/"+name);
    console.log(data);
    return data;
}