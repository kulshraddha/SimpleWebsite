import React, { useState } from 'react';
import Email from "@mui/icons-material/Email"
import Phone from "@mui/icons-material/Phone"
import "./SideBar.css"
import { Button, IconButton } from '@mui/material';
import Context from "../BodyDetails/Context"
import Info from '../BodyDetails/Info';
const SideBar = () => {

  const [print, setPrint] = useState([]);
  const [user, setUser] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault()
    console.log(print)
    if(!print.includes(user))
    setPrint([...print, user])
  };
  return ( 
    <>
    <h3>Contect</h3>
    <div className='cont'>
      <div className='part1'>
      <div><IconButton sx={{ padding: 0, paddingBottom: 0, }}>
           <Email/>
        </IconButton>
           <span><input type="text" name="email" onChange={handleChange}/></span>
          
        </div>
  
        </div>
        <div className="part2" style={{marginTop: 20}}>
      <IconButton sx={{ padding: 0, paddingBottom: 0, }}>
           <Phone/>
        </IconButton>
           <span ><input type="text" name="mobile" onChange={handleChange}/></span>
        </div>
        
        <div style={{marginTop: 20}}><Button variant='contained'color='error'sx={{width: 300}} onClick={submitForm}>Save</Button></div>


     {/* {Array.isArray(print) && print.map(({mobile, email}) => {
      return (
        <h2>{mobile}</h2>,
        <h2>{email}</h2>
      )
    })} */}
        
    </div>

    
    <Context.Provider
         value={{
          print: print,
          
          
         }}
     >
    
         
     </Context.Provider>
    </>
   );
}
 
export default SideBar;