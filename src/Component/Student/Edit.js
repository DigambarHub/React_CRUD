
import {Typography, Box, Grid, TextField, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Edit =()=>{
    const navigate=useNavigate();
    const GoBackTohome=()=>{
        navigate('/')
    }
    const {id}=useParams();
    const [student,setStudent]=useState({
        name:"",
        email:''
    });
    useEffect(()=>{ 
            async function GetData(){
            try{
                const student = await axios.get(`http://localhost:8000/students/${id}`);
            setStudent(student.data)
            }catch{
                console.log("somthing went wrong")
            }
        }
        GetData();
    },[id]);
    function onTextFieldChange(e) {
        setStudent({
         ...student,
         [e.target.name]: e.target.value
        })
       }
       async function onFormSubmit(e){
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8000/students/${id}`, student)
            navigate('/')
        } catch (error){
           console.log("error")
        }
       }
    


    return(
        <>
          <Box textAlign="center" p={2}  mb={2} bgcolor={"violet"}>
                <Typography variant="h2" style={{color:"white"}}>React CRUD with API Call</Typography>
            </Box>

            <Grid container  justifyContent='center' spacing={4}>
                <Grid item md={6} xs={12} >
                <Box textAlign="center" p={2} style={{backgroundColor:"blue"}}>
                <Typography variant="h4" color={"white"}>Edit Student</Typography>
                </Box>
                <form>
                <Grid container spacing={2} pt={2}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                     autoComplete="id"
                     name="id" 
                     variant="outlined"
                     required fullWidth
                     id="id"
                     label="ID" 
                     disabled 
                     value={id}
                     
                     />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                     autoComplete="name"
                     name="name" variant="outlined" 
                     required fullWidth id="name" 
                     label="Name" 
                     value={student.name}
                     onChange={e=>onTextFieldChange(e)}
                     
                     />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                     autoComplete="email"
                     name="email" variant="outlined"
                     required fullWidth id="email" 
                     label="Email Address" 
                     value={student.email}
                     onChange={e=>onTextFieldChange(e)}
                     />
                </Grid>
                </Grid>
                <Box m={3}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary" 
                    fullWidth 
                    onClick={e=>onFormSubmit(e)}
                  > Update 
                  </Button>
                </Box>
                </form>
                <Box m={3} textAlign="center">
                   <Button variant="contained" color="primary" onClick={GoBackTohome} >Back to Home</Button>
                </Box>
                </Grid>
            </Grid >
        </>
    )
}
export default Edit;