import { useState } from "react"
function Valueairthmetic(x)
{

const[a, seta]=useState("");
const[b, setb]=useState("");
const[c, setc]=useState("");


function Add()
{
setc(parseInt(a)+parseInt(b));

}

function Subtract()
{
setc(parseInt(a)-parseInt(b));

}

function Multiply()
{

setc(parseInt(a)*parseInt(b));
}

function Divide()
{
setc(parseInt(a)/parseInt(b));

}

return (

<div>  
<input type="text" onChange={(e)=>seta(e.target.value)}/>
<input type="text" onChange={(e)=>setb(e.target.value)}/>


<h1>{c}</h1>

<button onClick={Add}>Sum</button>
<button onClick={Subtract}>Minus</button>
<button onClick={Multiply}>Multi</button>
<button onClick={Divide}>Divide</button>

</div>  
 );
}

export default Valueairthmetic;