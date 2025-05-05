import React from 'react'
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip"
import Api from "./Api"
import { darkScrollbar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Card.css';
import {useState} from 'react';
// const albums = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/200", // image URL
//     followers: "100 Follows", // label
//     title: "Bollywood Covers", // title
//     subtitle: "New English Songs", // subtitle
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/200",
//     followers: "350 Follows",
//     title: "Retro Vibes",
//     subtitle: "Old Hindi Songs",
//   },
// ];
 

function Cards({albums, name}){
   const [collapse, setCollapse] = useState(true);
   const [cont, setCont] = useState("Show All")
   function collapseable(){
    if(collapse===true){
      setCollapse(false);
      setCont("Collapse")
    }
    else{
      setCollapse(true);
      setCont("Show All");
    }
   }
   return(

    <div>
    <div className='divi'>
    {name!=="Songs"?<Typography variant="title" color='#fff'>
            {name}
          </Typography>:null}{name!=="Songs"?
     <Typography onClick={()=>collapseable()} className='div' >{cont}</Typography>:null}
    </div>
    {collapse ?
    <Swiper
       modules={[Navigation]}
        navigation={true}

       spaceBetween={50}
       slidesPerView={'auto'}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
    >
      
        
   {albums.map((album)=>(
    <SwiperSlide key={album.id} style={{ width: '200px' }}>
   <Card sx={{ width:200, borderRadius:2, boxShadow: 3}}>
      
      <CardActionArea>
        <CardMedia
          component="img" 
          height="140"
          image={album.image}
          alt={album.title}
        />
        <CardContent>
          {name==="Songs"?
            <Typography 
          variant='caption'
           sx={{
            backgroundColor: '#121212',
            borderRadius: 2,
            px: 1,
            py: 0.5,
            display: 'inline-block',
            color:'#fff',
            mb: 1,
            fontWeight: 'bold',
            boxShadow: 3,
            transition: '0.3s',
           '&:hovor':{darkScrollbar,
              boxShadow: 6,                 
               backgroundColor: '#f0f0f0',   
              transform: 'scale(1.03)'
            }

           }}
          >
           Likes {album.likes}
          </Typography>:
          <Typography 
          variant='caption'
           sx={{
            backgroundColor: '#121212',
            borderRadius: 2,
            px: 1,
            py: 0.5,
            display: 'inline-block',
            color:'#fff',
            mb: 1,
            fontWeight: 'bold',
            boxShadow: 3,
            transition: '0.3s',
           '&:hovor':{darkScrollbar,
              boxShadow: 6,                 
               backgroundColor: '#f0f0f0',   
              transform: 'scale(1.03)'
            }

           }}
          >
           follows {album.follows}
          </Typography>
          }
          {/* <Typography variant="sub-title" fontWeight='bold'>
            {album.subtitle}
          </Typography> */}
        </CardContent>
       
      </CardActionArea>
    </Card>
     <Typography variant="title" fontWeight='bold' color='#fff'>
            {album.title}
          </Typography>
    
  
   
      </SwiperSlide>
      ))}
      
    </Swiper> :  <Swiper
       modules={[Navigation]}
        navigation={true}

       spaceBetween={50}
       slidesPerView={'auto'}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Grid container spacing={0.5}>
   {albums.map((album)=>(
     <Grid item key={album.id}>
   <Card sx={{ width:200, borderRadius:2, boxShadow: 3}}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={album.image}
          alt={album.title}
        />
        <CardContent>
          <Typography 
          variant='caption'
           sx={{
            backgroundColor: '#121212',
            borderRadius: 2,
            px: 1,
            py: 0.5,
            display: 'inline-block',
            color:'#fff',
            mb: 1,
            fontWeight: 'bold',
            boxShadow: 3,
            transition: '0.3s',
           '& hovor':{darkScrollbar,
              boxShadow: 6,                 
               backgroundColor: '#f0f0f0',   
              transform: 'scale(1.03)'
            }

           }}
          >
           follows {album.follows}
          </Typography>
          
          {/* <Typography variant="sub-title" fontWeight='bold'>
            {album.subtitle}
          </Typography> */}
        </CardContent>
       
      </CardActionArea>
    </Card>
     <Typography variant="title" fontWeight='bold' color='#fff'>
            {album.title}
          </Typography>
    </Grid>))}
  
   </Grid>
      </SwiperSlide>
      
      ...
    </Swiper>
     }
    </div>
   
   )
}

 export default Cards;