import { useState, useEffect } from "react";
export const ShowStudents = () => {
  const [result, setresult] = useState([]);

  // let result = [
  //     { age: 21 },
  //     { age: 13 },
  //     { age: 14 },
  //     { age: 15 },
  //     { age: 16 },
  //   ];

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    let data = await fetch("http://localhost:8080/students");
    let res = await data.json();
    console.log(res);
    setresult(res);
  };

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button
          className="sort"
          onClick={() => {
            let a = [...result].sort((a, b) => Number(a.age) - Number(b.age));
            setresult(a);
          }}
        >
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {/* populate all rows like below: */}
          {/* {console.log(result.sort((a,b)=>(Number(a.age)-Number(b.age))))} */}

          {result.map((d) => (
            <tr className="row">
              <td className="first_name">{d.first_name}</td>
              <td className="last_name">{d.last_name}</td>
              <td className="email">{d.email}</td>
              <td className="gender">{d.gender}</td>
              <td className="age">{d.age}</td>
              <td className="tenth_score">{d.tenth_score}</td>
              <td className="twelth_score">{d.twelth_score}</td>
              <td className="preferred_branch">{d.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
