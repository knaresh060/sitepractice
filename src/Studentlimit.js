

function Student()
{
let a=10;
let b=10;
let c=10;
function show()
{
    c=c+10;
    alert(c);
}

return(
<div>
<h1>Result is {c}</h1>
<button onClick={show}>increment</button>
<button onClick={()=>increment()}>increment new</button>
</div>
);
}
export default Student;