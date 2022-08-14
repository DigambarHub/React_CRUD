import { Typography,Box, Tooltip, IconButton,  } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import  axios  from "axios";
import { useState, useEffect } from "react";

const List =()=>{
  const [Students ,setStudent]= useState([]);
  useEffect(()=>{
    getAllstudent()
  } );
  async function getAllstudent(){
    try{
      const students = await axios.get(`http://localhost:8000/students`)
      // console.log(students.data)
      setStudent(students.data);
    }catch(error){
      console.log("somthing went Wrong")
    }
  }
  const handalDelete = async id =>{
     await axios.delete(`http://localhost:8000/students/${id}`);
     var newStudent = Students.filter((item)=>{
            return item.id !== id;
     })
     setStudent(newStudent);
  }


 
    return(<>
        <Box textAlign="center" padding={2} bgcolor='aqua' >
              <Typography variant="h4" color="white"> Student List</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow style={{backgroundColor:'#616161'}}>
                    <TableCell align="center" style={{color:'white'}}>No</TableCell>
                    <TableCell align="center" style={{color:'white'}}>Name</TableCell>
                    <TableCell align="center" style={{color:'white'}}>Email</TableCell>
                    <TableCell align="center" style={{color:'white'}}>Action</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      Students.map((student,i)=>{
                        return(
                      <TableRow key={i} >
                      <TableCell align="center">{i+1}</TableCell>
                      <TableCell align="center">{student.name}</TableCell>
                      <TableCell align="center">{student.email}</TableCell>
                      <TableCell align="center">
                          <Tooltip title="view">
                          <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
                          </Tooltip>
                          <Tooltip title="Edit">
                            <IconButton> <Link to={`/edit/${student.id}`}><EditIcon color="primary" /></Link></IconButton>
                          </Tooltip>
                           <Tooltip title=" Delete">
                           <IconButton onClick={()=>handalDelete(student.id)} ><DeleteIcon color="error" /></IconButton>
                          </Tooltip>
                      </TableCell>
                    </TableRow>
                         )
                      })
                    }
                    </TableBody>
              </Table>
            </TableContainer>
    </>)
}
export default List;