import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState, useEffect } from 'react';
function App() {
  const [show, setshow] = useState(true)
  return (
    <div className="App">

      
      <ShowStudents/>
      

      {show ? <AddStudent/>:null}


      <button className="togglebtn"  onClick={()=>{
          setshow(!show)
        }}>{show ? "hide":"show"}show</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;