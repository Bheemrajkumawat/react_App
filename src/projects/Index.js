import React from "react";
import "./Index.css";
import { useState } from "react";

function Index(props) {

  
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const NewData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const Onsubmit = (e) => {
    e.preventDefault();
    setData({ name: "", email: "", password: "" });
 
    // console.log(data);
  };

  return (
    <>
      <div className="container">
        <h1>{props.name}</h1>

        <input
          type="text"
          value={data.name}
          placeholder="Name"
          name="name"
          onChange={NewData}
        />
        <input
          type="email"
          value={data.email}
          placeholder="email"
          name="email"
          onChange={NewData}
        />
        <input
          type="password"
          value={data.password}
          placeholder="password"
          name="password"
          onChange={NewData}
        />
        <button onClick={Onsubmit}>submit</button>
      </div>
      <table >
        <tr>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>
        
        {
          data.map((vel,ind) => {
            return (
              <tr key={ind}>
                <td>{vel.name}</td>
                <td>{vel.email}</td>
                <td>{vel.password}</td>
              </tr>
            );
          })};
      </table>
    </>
  );
}

export default Index;
