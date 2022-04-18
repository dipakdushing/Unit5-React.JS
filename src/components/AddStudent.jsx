import { useState } from "react";
import {nanoid} from "nanoid"
export const AddStudent = () => {
    const [form, setForm]=useState({
        id: nanoid(),
       first_name: "",
        last_name: "",
        email   :"",
        gender: "",
        age: "",
       tenth_score:"",
       twelth_score: "",
       preferred_branch: ""
    })

    const [opt,setOpt]=useState(" ")
    const handlechange =(e)=>{
        const {id,value}=e.target

        setForm({
            ...form,
            [id]:value
        })
    }

    const handlesubmit =(e)=>
{
        e.preventDefault();
        console.log(form)
        fetch("http://localhost:8080/students",{
              method: "POST",
              headers: {
                  "content-type" : "application/json"
              },
              body: JSON.stringify(form)
          })


}

    return (
      <form className="addstudent" onSubmit={handlesubmit}>
        <div>
          Firstname:{" "}
          <input
          onChange={handlechange}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            id="first_name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
           onChange={handlechange}
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
           id="last_name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
           onChange={handlechange}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
           id="email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
             onChange={handlechange}
              name="gender"
              id="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input
             onChange={handlechange}
              name="gender"
              id="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
           onChange={handlechange}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            id="age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
           onChange={handlechange}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            id="tenth_score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
           onChange={handlechange}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            id="twelth_score"
          />{" "}
        </div>
        <div>
          <select
        
          onChange={(e)=>(
              e.target.value
              
          )}
       

            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            id="preferred_branch"
            className="preferred_branch"
          >
             

            <option   value="law">law</option>
            <option  value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };