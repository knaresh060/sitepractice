
import { useState } from "react";
function Airth() 
{
  let a=10;
  let b=5;
const[d, R]=useState(0);


function Sum()
{
   R(a+b); 

}

function Divide()
{

R(a/b);
}

function Subtract()
{
R(a-b);

}

function Multiply()
{
R(a*b);

}

  return(

<div>

  <h1>{d}</h1>


  <button onClick={Sum}>Jod</button>

  <button onClick={Divide}>Bhaag</button>

<button onClick={Subtract}>Ghataa</button>

<button onClick={Multiply}>Gunna</button>

</div>

  );
}

export default Airth;