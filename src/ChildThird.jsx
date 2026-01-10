import {useContext} from "react";
import {NameChangeContext} from "./App.jsx";

function ChildThird() {
    const {name,setName}=useContext(NameChangeContext);


    return(
    <div>
        <h2>Name:{name}</h2>
        <button onClick={()=>setName("SankalpAI Labs")}>
        Change Name
        </button>
    </div>
    );
}
export default ChildThird;
