import {useState} from "react";
function NameChanger()
{
    const [name,setName]=useState("santhi");

    const changeName=()=>{
        setName("SankalpAI Labs");
    };
    return(
        <div>
            <h2>Current Name:{name}</h2>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}
export default NameChanger;