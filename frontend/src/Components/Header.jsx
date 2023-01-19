import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

import { Button, Typography, Grid, AppBar, Toolbar } from '@mui/material';

import '../App.css';


function Header() {
    const [btnColor, setBtnColor] = useState("error");
    const navigate = useNavigate();
  return (
    <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          <div style={{
            marginRight: "auto",
          }}>
            <Button color="inherit" onClick={()=>navigate('/')}><Typography variant="h4">ACK Map</Typography></Button>
          </div>


          <div>
            <Button color="inherit" style={{
              marginRight: "2rem",
            }}><Typography variant="h6" onClick={()=>navigate('/listings')}>Listings</Typography></Button>
            <Button color="inherit" style={{
              marginLeft:"2rem",
            }}><Typography variant="h6">Agencies</Typography></Button>
          </div>


          <div style={{
            marginLeft: "auto",
            marginRight: "10rem",
          }}>
            <Button className='button1' style={{
              backgroundColor: "green",
              color: "red",
              width: "15rem",
              fontSize: "1.1rem",
              marginRight: "1rem",
              
            }}>Add Property</Button>

            <Button style={{
              backgroundColor: "white",
              color: "black",
              width: "15rem",
              fontSize: "1.1rem",
              marginLeft: "1rem",
              border: "none",
              borderRadius: "20px",
           
            }} onClick={()=>navigate('/login')}>Login</Button>
          </div>
        </Toolbar>
      </AppBar> 
  )
}

export default Header