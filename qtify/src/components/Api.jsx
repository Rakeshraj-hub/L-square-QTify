import React from 'react'
import  axios from 'axios'
import { useEffect, useState} from 'react'
import Cards from './Cards';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

function Api (){
    const [albums, setAlbums] = useState([]);
    const [albums1, setAlbums1] = useState([]);
    const [albums2, setAlbums2] = useState([]);
    const [ value, setValue] = useState(0);
    const [ val, setVal] = useState(null);
    // var nam = "Songs";
    

    useEffect(()=>{
        generateTopSongs();
        generateAlbumSongs();
        generateSongs();

    },[])

    const generateSongs = async()=>{
         try{
             const resp = await axios.get('https://qtify-backend-labs.crio.do/songs');
             setAlbums2(resp.data);
         }
         catch(e){
            console.log("Something went wrong", e.data.message)
         }
    }

    const generateAlbumSongs = async()=>{
        try{
           const res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
            setAlbums1(res.data);
        }
        catch(e){
            console.log("Something went wrong", e.data.message);
        }
    }

   const generateTopSongs = async()=>{
    try{
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    setAlbums(response.data);
    }
    catch(e){
        console.log("Something went wrong",e.data.message);
    }

   }

   const handleChange = (event, newValue)=>{
    
    setValue(newValue);

    let selectedGenre = null;

    if (newValue === 1) {
        selectedGenre = "rock";
    } else if (newValue === 2) {
        selectedGenre = "pop";
    } else if (newValue === 3) {
        selectedGenre = "jazz";
    } else if (newValue === 4) {
        selectedGenre = "blues";
    }

    if (selectedGenre) {
        const filtered = albums2.filter((data) => data.genre.key === selectedGenre);
        setVal(filtered);
    } else {
        setVal(null); // Show all
    }
   }

   return (
    <div>
    <Cards albums={albums} name= "Top Albums"/>
    <br sx={{color:'blue'}}/>
    <Cards albums={albums1} name = "New Albums"/>
    <div>
    <Tabs value={value} onChange={handleChange}    >
  <Tab label="All" sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }}/>
  <Tab label="Rock" sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} />
  <Tab label="Pop" sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }}/>
  <Tab label="Jazz" sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }}/>
  <Tab label="Blues" sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }}/>
   </Tabs>
     {val?<Box mt={2} p={2} sx={{ backgroundColor: 'black' }}>
  <Typography variant="h6" color="white">
    Songs
  </Typography>
  <Cards albums={val} name="Songs" />
</Box>:<Cards albums={albums2} name="Songs" />
     }
    </div>
    </div>
   
    )

   
}

export default Api;
