import React, { useState, useEffect} from 'react';
import Axios from "axios";

// react-leaflet
import { MapContainer, TileLayer, Marker, Popup, useMap,  } from 'react-leaflet'
import { Icon } from 'leaflet';

//MUI
import { Grid, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent, CircularProgress } from "@mui/material";

import cathedralIconPng from './ACKAssets/cathedral.png';
import churchIconPng from './ACKAssets/church.png';

import cathedralImg from './ACKAssets/mathews.jpg';

import myListings from './ACKAssets/property/propertyData';

import '../App.css';

function Listings() {

  // fetch("http://127.0.0.1:8000/api/listings/").then(response=> response.json()).then(data=>console.log(data))

  const cathedralIcon = new Icon({
    iconUrl: cathedralIconPng,
    iconSize: [40, 40],
  })

  const churchIcon = new Icon({
    iconUrl: churchIconPng,
    iconSize: [40, 40],
  })

  const [latitude, setLatitude] = useState(0.5162351312454657);
  const [longitude, setLongitude] = useState(35.283775575510305);

  const [allListings, setAllListings] = useState([])
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    const source = Axios.CancelToken.source();
    async function GetAllListings(){
      try {
        const response = await Axios.get("http://127.0.0.1:8000/api/listings/", {cancelToken: source.token});
        // console.log(response.data);
        setAllListings(response.data);
        setDataLoading(false)
      } catch (error) {
        console.log(error.response)
      }

    }
    GetAllListings()
    return ()=>{
      source.cancel();
    }
  }, [])

  if (dataLoading === false){
    console.log(allListings[0].location);
  }

  if (dataLoading === true){
    return (
      <Grid container justifyContent="center" alignItems="center" style={{height: "100vh"}}>
        <CircularProgress />
      </Grid>
    )
  }

  return (
   <Grid container>
    <Grid item xs={4}>

      {/* Card Component */}
      {allListings.map((listing)=>{
        return (
          <Card key={listing.id} className="cardStyle">
            <CardHeader
              
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={listing.title}
              
            />
            <CardMedia
              className="pictureStyle"
              component="img"
              image={listing.picture1}
              alt={listing.title}
            />
            <CardContent>
              <Typography variant="body2" >
                {listing.description.substring(0,200)}...
              </Typography>
            </CardContent>
            
            {/* <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              
            </CardActions> */}
        
        </Card>
        )
      })}    

    </Grid>


    <Grid item xs={8} style={{marginTop: "0.5rem"}}>
      <AppBar position='sticky'>
        <div style={{height: "100vh"}}>
          <MapContainer center={[0.5162351312454657, 35.283775575510305]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {allListings.map((listing)=>{
              function IconDisplay(){
                if (listing.listing_type === "Cathedral"){
                  return cathedralIcon;
                }
                else if (listing.listing_type === "Church"){
                  return churchIcon;
                }
                else if (listing.listing_type === "Office"){
                  return officeIcon;
                }
              }
              return (
                <Marker 
                  key={listing.id}
                  icon={IconDisplay()}
                  position={[
                    listing.location.coordinates[0],  
                    listing.location.coordinates[1],
                  ]}>
                    <Popup>
                      <Typography variant="h5">{listing.title}</Typography>
                      <img src={listing.picture1} style={{height:"14rem", width:"18rem"}}/>
                      <Typography variant='body1'>
                        {listing.description.substring(0,150)}...
                      </Typography>
                      <Button variant="contained" fullWidth>Church Details</Button>
                    </Popup>
                </Marker>
              )
            })}

            {/* <Marker icon={cathedralIcon} position={[latitude, longitude ]}>
              <Popup>
                <Typography variant="h5">Cathedral</Typography>
                <img src={cathedralImg} style={{height:"14rem", width:"18rem"}}/>
                <Button variant="contained" fullWidth>website link</Button>
                
              </Popup>
            </Marker> */}

          </MapContainer>
        </div>
      </AppBar>
    </Grid>
   </Grid>
  )
}

export default Listings