import React from 'react'
import { useState } from 'react'

function Project2() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({name:"",email:"",password:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {name,email,password}=inputdata;
    let value=password;
    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }
    function addinputdata(){

        if(name==="" && email===""){
            alert("Enter Name and email")
        }
        else{
        setArray([...array,{name,email,password}])
        // console.log(inputdata)
        setInputdata({name:"",email:"",password:""})
    }
    }
// deleting row 
function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

// updatedata
function updatedata(i){

    let {name,email,password}=array[i]//this perti  // preventDefault();cular index no row data shoud be update so we get this index no row data in name or number 
    setInputdata({name,email,password})
    setBolin(true)
    setIndex(i)

}

//know add data at perticular index means update it on that index
function updateinfo(){
    let total=[...array]
    total.splice(index,1,{name,email,password})
    setArray(total)
     setBolin(false)
     setInputdata({name:"",email:"",password:""})
}
  return (
    <>
    <div className='container'>
  
  {/* this is a logo */}
  <div className='left'>
    <h1>Bk</h1>
  </div>
  <div className='mid'>
    <ul className='navbar'>
      <li><a href='#'className='active'>Home</a></li>
      <li><a href='#'>EXPERIENCE</a></li>
      <li><a href='#'> PROJECTS</a></li>
      <li><a href='#'>Abouts</a></li>
    </ul>
  </div>
  {/* <div className='rite'>
    <h1>bheemraj</h1>
  </div> */}
  <div className='contant'>
  <h1 className='logo'>LoginForm</h1>
        <div className='form-group'>
           <input type="Name" value={inputdata.name || ""} name="name" placeholder='Enter Name' onChange={data} />
           </div>
           <div className='form-group'>
           <input type="email" value={inputdata.email || ""} name="email" placeholder='Enter email' onChange={data} />
           </div>
           <div className='form-group'> 
    <input type="password" value={inputdata.password || ""} name='password'  placeholder='Enter password' onChange={data}  />
    </div>
    <button className="btn"onClick={!bolin?addinputdata:updateinfo}>{!bolin?`submit`:`Update`}</button>
     </div>
    </div>
    <section>
      <h3>Fixed Table header</h3>
     <div class="tbl-header">
     <table cellpadding="0" cellspacing="0" border="0">
      <thead>
      <tr>
                <th>Name</th>
                <th>email</th>
                <th>password</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
  </thead>
     </table>
   </div>
          <div class="tbl-content">
         <table >
        <tbody>
      {
       array && array.map(
        (item,i)=>{
        return(
        <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td><button onClick={()=>updatedata(i)}>update</button></td>
            <td><button onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
        )
        })
       }
      </tbody>
    </table>
  </div>
</section>
  </>
  )
}

export default Project2