import React,{useEffect,useState}from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function From() {
  let initialValue;
  if (localStorage.getItem('plant')===null){
    initialValue=[];
  }else{
    initialValue=JSON.parse(localStorage.getItem("plant"));
  }
  const [value, setValue]= useState(initialValue)

  const [insert, setInsert] =useState([])

  const handlechange=(e)=>{
    setInsert({...insert,[e.target.name]: e.target.value});
  }
  console.log(value,'value state');
  console.log(insert,'insert state');
  
  const handlesubmit =(e)=>{
    e.preventDefault();
    const newPlandID = value.length === 0 ? 1 : value[value.length - 1].p_id + 1;
    const details = {
      p_id: newPlandID,...insert
    };
    const updateValue = [...value, details];
    setValue(updateValue)
    localStorage.setItem('plant',JSON.stringify(updateValue));
  }
  
  return (
    <div>
        <div style={{width:'30%',marginLeft:'550px', marginTop:'30px'}}>
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '90%' } }}
      noValidate
      autoComplete="off"
      style={{}}
    > <h1 style={{marginLeft:'20px'}}>Inserting Form</h1>
      <TextField id="outlined-basic" name='name'label="Product Name" variant="outlined" placeholder='Product Name'   onChange={handlechange} required/><br />
      <TextField id="outlined-basic" name='Availability' label="Availability" variant="outlined" placeholder='Product Name'   onChange={handlechange} required /><br />
      <TextField id="outlined-basic" name='Price' label="Price" variant="outlined" placeholder='Product Name'   onChange={handlechange} required /><br />
      <TextField id="outlined-basic" name='Description' label="Description" variant="outlined" placeholder='Product Name' multiline  onChange={handlechange} required /><br />
      <TextField id="outlined-basic" name='ImageLink' label="ImageLink" variant="outlined"placeholder='Product Name'   onChange={handlechange} required /><br />
      <Button variant="outlined" onClick={handlesubmit}>Submit</Button>
      </Box>
      </div>
    </div>
  )
}
