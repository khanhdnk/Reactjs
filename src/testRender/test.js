import { useState } from "react";

export function TestRenderjs(){

    let number = 0;
    // const [number, setNumber] = useState(0);
    const setNumber = function(){
        number++;
        console.log(number); 
        alert("clicked")
    }
    function logger({a,b,...rest}){
        console.log(a);
        console.log(b);
        console.log(rest);
    }
    let object = {a: 3,
    b: 4,
    c: 5
    }
    logger(object);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={setNumber}>Click</button>
        
        </>
    );
}