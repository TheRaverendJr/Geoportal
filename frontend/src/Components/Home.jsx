import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { Button, Typography, Grid, AppBar, Toolbar } from '@mui/material';

import CustomCard from './CustomCard';

import '../App.css';

import church from './ACKAssets/allsaints.jpg';
import Header from './Header';

function Home() {
  const [btnColor, setBtnColor] = useState("error");
  return (
    <>
      <div style={{position:"relative"}}>
        <img src={church} className="churchImg" />
        <div className='overlayText'>
          <Typography variant="h1" className='homeText'><span style={{color: 'white'}}>ACK GEOPORTAL</span></Typography>
          <Button variant="content" className='homeBtn'>SEE ALL PROPERTIES</Button>
        </div>
      </div>
      
    </>
  )
}

export default Home