
import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { Button, Typography } from '@mui/material';

import '../App.css';

function CustomCard() {
    const [btnColor, setBtnColor] = useState("error")
  return (
    <div style={{width: "100%", border: "2px solid black",
      padding: "15px "}}>
          <Typography variant="h4">This is the title</Typography>
          <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </Typography>
          <Button onClick={()=>setBtnColor("success")} variant="contained" size="large" style={{backgroundColor: "yellow"}}>
            Go
          </Button>
      </div>
  )
}

export default CustomCard