import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import  Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green,orange } from '@material-ui/core/colors';
import '@fontsource/roboto';

import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6888, #FE8E53)',
    border:0,
    marginBottom: 15,
    borderRadius:15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({
  typography:{
    h3:{
      fontSize:36,
      marginBottom:15
    }
  },
  // palette:{
  //   primary: {
  //     main: green[500]
  //   },
  //   secondary:{
  //     main:orange[400]
  //   }
  // }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button </Button>
}

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
        control={
          <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e)=> setChecked(e.target.checked)}
          inputProps={{
            'aria-label':'secondary checkbox'
          }}
        />} 
        label="Testing Checkbox"
        />
     
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h3">
            Hi my Self sanket Patil
          </Typography>
          <Typography variant="body" component="div">
            Learn how to use material UI
          </Typography>
          <ButtonStyled />
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}> 
              <Paper style={{ height:75, width:'100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%', }} />
            </Grid>
          </Grid>
          {/* <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="The Time"
            value="test@test.com"
            placeholder='test@test.com'
          /> */}
          <CheckboxExample />
          <ButtonGroup variant='contained' color='primary'>
          <Button 
            startIcon={<SaveIcon/>}
            >
            Hello world
          </Button>
          <Button 
            startIcon={<DeleteIcon/>}
            >
              Discard
          </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      </Container>
  </ThemeProvider>
  );
}

export default App;
