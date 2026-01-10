import {useState} from "react";
function PrimeNum() {
    const[num,setNum]=useState("");
    const [result,setResult]=useState("");
    
    const checkPrime=()=>{
        let n=Number(num);
        let fc=0;

        if (n>1) {
            for (let f=1;f<=n;f++) {
                if (n%f===0) {
                    fc++;
                }
            }
            if (fc==2) {
                setResult("is prime");
           }
           else {
            setResult("is not prime");
            }
       }
    };

    return (
    <>
    <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>

    <button onClick={checkPrime}>Check Prime</button>
    <p>Number: {num}</p>
    <p>{num} {result}</p>
    </>
    );
}
export default PrimeNum;