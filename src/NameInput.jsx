import {useState} from "react";
function NameInput() {
    const[name,setName]=useState("");
return (
    <>
    <input onChange={(e)=>setName(e.target.value)}/>
    <p>Your name is: {name}</p>
    </>
);
}
export default NameInput;