import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AppBar, Button, CssBaseline, Typography, FormControl } from '@material-ui/core';
import { useEffect, useState } from 'react';



const useStyle = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  content: {
    marginBottom: 100,
    padding: 20,
  },
  TypographyText: {
    padding :20,
  },
  textInput: {
    marginBottom:10,
  },
  button:{
    width:'80%',
  }
}));

function loginPage() {

  const [firstName , setFirstName] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  useEffect(()=>{
    const dataName = localStorage.getItem('userName');
    const dataPhone = localStorage.getItem('phoneNumber');
    if(dataName ){
      setFirstName(JSON.parse(dataName))
    }
    if(dataPhone){
      setPhoneNumber(JSON.parse(dataPhone))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('userName',JSON.stringify(firstName));
  },[firstName])
  useEffect(()=>{
    localStorage.setItem('phoneNumber',JSON.stringify(phoneNumber))
  },[phoneNumber])
   function handleChangeName(e){
    setFirstName(e.target.value);
  }
   function handleChangePhone(e){
    setPhoneNumber(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
  }
  console.log(phoneNumber)
  const classes = useStyle();
  return(   
    <div>
      <CssBaseline/>
      <div className={classes.content}>
          <AppBar  color='transparent' position='static' >
            <Typography className={classes.TypographyText}  align='center' variant='h3' color='primary'>Roll Call System</Typography>
          </AppBar>
          </div>
      <Container maxWidth='xs'>  
        <FormControl onSubmit={handleSubmit} className={`${classes.root} ${classes.textInput}`} noValidate autoComplete="off" size='medium' fullWidth >
              <Typography variant='h3'>Hello {firstName} </Typography>
              <TextField onInput={handleChangeName} value={firstName} id="standard-basic" label="Name" variant='outlined' fullWidth/>
              <TextField onInput={handleChangePhone} id="standard-basic" label="Phone Number" variant='outlined' required fullWidth />
              <Link href='./username'>
                <Button type='submit' fullWidth variant='contained' color='primary'>login</Button >
              </Link>
        </FormControl> 
      </Container>
    </div>      
    )
}
export default loginPage;

