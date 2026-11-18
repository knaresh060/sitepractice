import { Fragment } from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { data } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Studentdata(props)
{
  // add student form labels
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[mobile,setmobile]=useState("");
  const[course,setcourse]=useState("");



    return (
<>
  {props.show && (

            <div className="border rounded shadow p-4 bg-white mx-auto mt-3 text-start"
                 style={{ maxWidth: "450px" }}>

   {/* // add student form */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            name="name"
            value={props.name}
            onChange={(e)=>props.setname(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={props.email}
            onChange={(e)=>props.setemail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            name="mobile"
            type="tel"
            value={props.mobile}
            onChange={(e)=>props.setmobile(e.target.value)}
            placeholder="Enter mobile number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course</Form.Label>
          <Form.Select
            name="course"
            value={props.course}
            onChange={(e)=>props.setcourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button
            variant="secondary"
            onClick={() => props.setShow(false)}
          >
            Cancel
          </Button>

          <Button variant="primary" onClick={props.edit? props.edited:props.handleSave}>
            {props.edit?"Update":"Save"}
          </Button>
        </div>
        
      </Form>
  

  </div>
  )}
  </>
    );
}

export default Studentdata;