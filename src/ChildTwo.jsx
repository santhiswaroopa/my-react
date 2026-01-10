import {useContext} from "react";
import {AppContext} from "./App.jsx";

function ChildTwo() {
    const info=useContext(AppContext);

    return (
        <div>
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
            <p>Score: {info.score}</p>
        </div>
    );
}
export default ChildTwo;