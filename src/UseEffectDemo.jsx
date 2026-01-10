import {useEffect, useState} from "react";

function UseEffectDemo() {
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");
    const[price,setPrice]=useState(100);
    const[qty,setQty]=useState(1);

    const total=price*qty;

    useEffect(()=>{
        console.log(" Component Loaded (runs once)");
    },[]);

    useEffect(()=>{
        console.log(" Count changed:",count);
        document.title=`Count ${count}`;
    },[count]);

    useEffect(()=>{
        if(name!=="") {
            console.log("Name changed:",name);
        }
    },[name]);
    useEffect(() => {
      console. log("Price or Quantity changed");
    }, [price, qty]);
    useEffect(() => {
        console.log(" Total updated:", total);
    }, [total]);
    useEffect(() => {
      const timer = setInterval(() => {
         console. log("@ Timer running ... ");
      }, 5000);
      return()=>{
        clearInterval(timer);
        console.log("Timer cleaned up");
       };
    },[]);
return(
    <div style={ { padding: "20px" }}>
       <h2>useEffect - Complete Demo</h2>
       <button onClick={() => setCount(count + 1)}>
         Increment Count: {count}
       </button>
       <br /><br />
       <input
       type="text"
       placeholder="Enter name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
       <br /><br />
       <br /><br />
       <input
       type="number"
       value={price}
       onChange={(e)=>setPrice(e.target.value)}
       />
       &nbsp; &nbsp;
       <input
       type="number"
       value={qty}
       onChange={(e)=>setQty(e.target.value)}
       />
       <p>Total:{total}</p>
    </div> 
);
}
export default UseEffectDemo;
