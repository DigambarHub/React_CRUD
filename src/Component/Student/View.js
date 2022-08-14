
import { Typography,Box, Button  } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate ,useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const View =()=>{
    const navigate=useNavigate();
    const GoBackTohome =()=>{
        navigate('/')
    }
    const {id}=useParams();
    const [raja,setRaja]=useState([]);
    useEffect(()=>{
        getStudent();
    })
    async function getStudent(){
        try{
            const student = await axios.get(`http://localhost:8000/students/${id}`);
          
            setRaja(student.data);
        }catch{
            console.log('somthing went wrong');
        }
    }

   

    return(
        <>
          <Box bgcolor="darkblue" pb={2} pt={2} >
              <Typography textAlign="center" variant="h4" color="white">Student Detail</Typography>
          </Box>
          <TableContainer>
             <Table>
                 <TableHead>
                     <TableRow style={{backgroundColor:'#616161'}}>
                         <TableCell align="center" style={{color:'white'}}>ID</TableCell>
                         <TableCell align="center" style={{color:'white'}}>Name</TableCell>
                         <TableCell align="center" style={{color:'white'}}>Email</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     <TableRow>
                     <TableCell align="center">{raja.id}</TableCell>
                      <TableCell align="center">{raja.name}</TableCell>
                      <TableCell align="center">{raja.email}</TableCell>
                     </TableRow>
                 </TableBody>
             </Table>
          </TableContainer>
          <Box m={3} textAlign="center">
              <Button variant="contained" color="primary" onClick={GoBackTohome} >
                  Back to Home
              </Button>
          </Box>
        </>
    )
}
export default View;
