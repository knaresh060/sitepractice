
import { useState } from "react";
function Student()
{
const[a, ok]=useState(10);
const[b, okk]=useState(20);
const[c, okkk]=useState(0);

function show()
{
    okkk(a+b);
}
function increment()
{
okkk(c+10);
}
console.log("render");
return(
<div>
<h1>Result is {c}</h1>
<button onClick={show}>increment</button>
<button onClick={()=>increment()}>increment new</button>
</div>
);
}
export default Student;