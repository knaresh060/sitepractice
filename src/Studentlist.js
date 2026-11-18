import { Col, Container, Row,Modal} from "react-bootstrap";
import Headerlogin from "./Headerlogin";
import Loginfooter from "./Loginfooter";
import Dashboard from "./Dashboard";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";   
import { useEffect, useState } from "react";
import Stumap from "./Stumap";
import Studentdata from "./Studentdata";


function Studentlist()
 {
// add student form labels
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[mobile,setmobile]=useState("");
  const[course,setcourse]=useState("");
  
  // make a object to use map
  const[list,setlist]=useState([])

  // hide add student form
  const [show, setShow] = useState(false);

  const[edit,setedit]=useState(false) 
  const [Name, setName] = useState("");
  // calls automatically in starting
   useEffect(()=>
    {
      getdata();
    },[])
   
// use an get api in the object to use it somewherelse
   async function getdata() 
  {
   const response=await fetch("https://mymeeshoweb.onrender.com/getdatastudent");
   const list=await response.json();
   setlist(list);
   console.log(list); 
  }

  // option parameter to send in delete  api
 const optionapi = {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json",
    }
   
  };

// function to call api to delete data or student raw 
 async function del(list)
  {
  const response=await fetch(`https://mymeeshoweb.onrender.com/deletedatastudent/${list.name}`,optionapi);
   const result=await response.json();
   if(result.data.deletedCount>0)
   {
    getdata();
  alert("data deleted");
   }
  else
    {
   alert("data not deleted");
  }
    console.log(list)
  }


// to save dtat in object
const handleSave = async () => {
  const studentdata = {name,course,email,mobile};
  getdata();
  alert(JSON.stringify(studentdata));
  console.log("Student Details:", studentdata);
  setShow(false);


   // for inserting data make a posting object  for passing as parameter
  const posting = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentdata),
  };

  // for inserting data
    const response = await fetch("https://mymeeshoweb.onrender.com/insertdatastudent",posting);
    const result = await response.json();

    if (result.statuscode === 200) {
      getdata();
      alert("Data inserted");
    } else {
      alert("Data not inserted");
    }
  
  }

  // update the info os student 
  
function editing(list)
  {
    console.log(list);
  setname(list.name);
  setemail(list.email);
  setmobile(list.mobile);
  setcourse(list.course);
  setName(list.name);
  setShow(true); 
  setedit(true);
     }

async function edited(list)
{
  const optionapi={
  "method": "PUT",
  "headers": { "Content-Type": "application/json" },
  "body": JSON.stringify({ name, email, mobile, course }),
};

 const response=await fetch(`https://mymeeshoweb.onrender.com/putdatastudent?name=${Name}`,optionapi);
   const student=await response.json();
  console.log(student)
   if(student.data?.modifiedCount>0)
    {  
   
  alert("Data Updated");
   setShow(false);
   setedit(false);
    getdata();
    }
    else{
    alert("Data not Updated");
    }
  }

  return (
    <div>
      
      <Headerlogin />
      

      <Container fluid className="p-0">
        <Row className="g-0">

          {/* Left Sidebar */}
          <Col xs={12} md={2}>
            <Dashboard />
            
          </Col>

          {/* Right Side Content */}
      <Col  md={10} className="p-3 text-center">
  <h4><u>Welcome to Student List</u></h4>


<Table striped bordered hover responsive>
  <thead>
    <tr className="table-dark">
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Course</th>
      <th colSpan={2}>Action</th>
    </tr>
  </thead>

  <tbody>
  <Stumap data={list} editing={editing} del={del} />
    
  </tbody>
</Table>

    {/* // add student form */}
  <Button onClick={() => setShow(true)}>
    Add Student
  </Button>

 <Studentdata
    name={name}
    setname={setname}
    email={email}
    setemail={setemail}
    mobile={mobile}
    setmobile={setmobile}
    course={course}
    setcourse={setcourse}
    edit={edit}
    edited={edited}
    handleSave={handleSave}
    show={show}
    setShow={setShow}
/>
      
</Col>

        </Row>
      </Container>

      <Loginfooter />
    </div>
  );
}

export default Studentlist;