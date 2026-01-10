import {useContext} from "react";
import {NameContext} from "./App.jsx";

function Child() {
    const name=useContext(NameContext);

    return <h2>Hello {name}</h2>;
}
export default Child;