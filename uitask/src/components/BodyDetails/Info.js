import { IconButton } from '@mui/material';
import Contacts from "@mui/icons-material/Contacts"
import LocationOn from "@mui/icons-material/LocationOn"
import WorkHistory from "@mui/icons-material/WorkHistory"
import Edit from "@mui/icons-material/Edit"
import Context from "../BodyDetails/Context"
import React, { useContext, useState } from 'react';
import "./Info.css"
import SideBar from '../SideBar/SideBar';
import DailogOpen from '../SideBar/DailogOpen';
import AddEditUser from '../SideBar/DailogOpen';
const Info = () => {

   const [open, setOpen] = useState(false);

   const handleDrawerOpen = () => {
     setOpen(true);
   };
 
   const handleDrawerClose = () => {
     setOpen(false);
   };

   const {print }= useContext(Context);
    return ( 
      <>
        <div>
        <div className='infostart'>
        <div className='contact' style={{border: "1px solid #ddd"}}>
        <div className='connect'><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <Contacts/>
        </IconButton><span className='text'>Contect</span> <span className='icon'>
         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }} onClick={handleDrawerOpen}>
           <Edit color='error'/>
        </IconButton></span></div>
        
       {Array.isArray(print) && print.map((val) =>(
        <div>
          <h3>{val.email}</h3>
        </div>
       ))}
       <h5>shraddha@gmail.com</h5>
       
        </div>
        <div className='adress'style={{border: "1px solid #ddd"}}>
        <div className='connect'><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <LocationOn/>
        </IconButton><span className='text'>Address</span> <span className='icon'>
         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }} onClick={handleDrawerOpen}>
           <Edit color='error'/>
        </IconButton></span></div>
        <h5>shraddha@gmail.com</h5>
        
        </div>
        <div className='time' style={{border: "1px solid #ddd"}}>
        <div className='connect'><IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
           <WorkHistory/>
        </IconButton><span className='text'>Hours of Operations</span> <span className='icon1'>
         <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }} onClick={handleDrawerOpen}>
           <Edit color='error'/>
        </IconButton></span></div>
        <h5>shraddha@gmail.com</h5>
       
        </div>
      
        </div>
       
        </div>
         <Context.Provider
         value={{
           open:  open,
         handleDrawerClose: handleDrawerClose
            
         }}
     >
         <AddEditUser/>
     </Context.Provider>
     </>
     );
}
 
export default Info;