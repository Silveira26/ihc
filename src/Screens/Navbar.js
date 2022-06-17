import * as React from 'react';
import { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


import Overlay from './Overlay';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            menu_open: false,
            user: {name:"Pedrocarush",img: "/avatar/Pedrocarush.webp"}
        }
    
    }

    _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        //alert(e.target.value) // e.target.value -> name of the game
        this.saveStateToLocalStorage(e.target.value);
        window.location.href = '/Search';
        
      }
    }

    saveStateToLocalStorage = (searchIn) => { 
      localStorage.setItem('Search', searchIn); 
      console.log("Saved to local storage");
    }

    render() {
        return (
          <div>
            <Overlay />
            <AppBar position="static">
              <Container maxWidth="x0.5">
                <Toolbar disableGutters>
                  <Grid container spacing={2}>
                    <Grid item xs={1}>
                      <a href="/Home" style={{ textDecoration: "none" }}>
                        <img src={"/logo.png"} alt="ERROR" style={{ marginTop:'1vw' }}></img>
                      </a>
                    </Grid>
                    <Grid item xs={1}>
                      <a href="/TopGames" style={{ textDecoration: "none" }}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}> Top Games </Button>
                      </a>
                    </Grid>
                    {/* <Grid item xs={1}>
                      <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>{document.getElementById("overlay").style.display = "block"; document.body.style.overflow = 'hidden'; }} > Genres </Button>
                    </Grid> */}
                    <Grid item xs={5}>
                      <div style={{ marginTop:'1vw' }}>
                        <Search>
                          <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} style={{ width: '100%' }} onKeyDown={this._handleKeyDown} />
                        </Search>
                      </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                      
                        <Item  style={{ marginTop:'0.45vw' }}> <Grid container spacing={2}>
                            <Grid component={Link} to="/UserPage" style={{ textDecoration: "none"}} item xs={10}>
                              <h2 style={{ marginTop: '7px', marginBottom: '0px'}}>{ this.state.user.name }</h2>
                            </Grid>
                            <Grid   item xs={2}>
                              <Avatar href="/UserPage"  alt="ERROR" src={ this.state.user.img } />
                            </Grid>
                          </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton href="/Login" aria-label="fingerprint" size="large" style={{color: "#eceff1",marginTop:'0.6vw',marginLeft:'1vw' }}>
                        <LogoutIcon fontSize="inherit"/>
                      </IconButton>
                        </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
        );
    }
}
