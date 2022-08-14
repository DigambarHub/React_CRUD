
import { Typography,Box,Grid ,TextField,Button,} from "@mui/material";
import List from "../Student/List"
import { useState } from "react";
import axios from "axios";

const Home = () =>{
    const [student,setStudent]= useState({
        name:"",
        email:""
    });

    function ontextFilled(e){
      setStudent({
        ...student,
        [e.target.name]:e.target.value
      })
      console.log(student);
    }
    const [state,setState]=useState();

    async function onformSubmit(e){
      e.preventDefault()
      try{
         await axios.post('http://localhost:8000/students',student);
         setState(true);
      }catch{
         console.log("somthins  wrong")
      }
    }
    if(state){
      return <Home/>
    }
    
    return(
     <>
      <Grid pl={2} pr={2}>
             <Box textAlign="center" bgcolor="slateblue" p={2}>
                 <Typography variant="h2" element="h2" color="white"> React CRUD with API Call </Typography>
            </Box>
          </Grid> 
        <Grid container justifyContent='center' spacing={2} pl={2} pr={2} pt={3} >
          <Grid item md={6} xs={12} pt={3} pl={2} pr={2}>
            <Box textAlign="center" padding={2} bgcolor='blue'>
              <Typography variant="h4" color="white">Add Student</Typography>
            </Box>
            <form noValidate>
               <Grid container spacing={2} pt={2} pl={2} pr={2}>
               <Grid item xs={12}>
                  <TextField  
                   autoComplete="name" 
                   variant="outlined" 
                   name="name"
                   required fullWidth 
                   label="Enter Name" 
                   onChange={e=>ontextFilled(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField    
                  autoComplete="email"
                  variant="outlined"
                  name="email"
                  required fullWidth 
                  label="Email Address"
                  onChange={e=>ontextFilled(e)}
                  />
                </Grid>
                   <Box m={3}>
                    <Button 
                     variant="contained" 
                     onClick={e=> onformSubmit(e)}
                     >Add</Button>
                   </Box>
               </Grid>
            </form>  
          </Grid>

          <Grid item md={6} xs={12} pt={3}>
                  <List/>
            </Grid>
         </Grid>
     </>)
   
}
export default Home;