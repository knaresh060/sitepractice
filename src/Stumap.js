import React from "react";
import { Button } from "react-bootstrap";


function Stumap(props)
{


    return(
<>
    
 {props.data.map((list,index) => (
      <tr key={list.id}>
        <td>{index+1}</td>
        <td>{list.name}</td>
        <td>{list.email}</td>
        <td>{list.mobile}</td>
        <td>{list.course}</td>
        <td><Button onClick={() => props.editing(list)} variant="outline-info">Edit</Button></td>
        <td><Button onClick={() => props.del(list)} variant="outline-danger">Delete</Button></td>  
      </tr>

 ))}


 </>
)
}

export default Stumap;