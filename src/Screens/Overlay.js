import { Component } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default class Overlay extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    
    }

    render(){
        return (                  
            <div
            id="overlay" onClick={()=>{document.getElementById("overlay").style.display = "none";
                                        document.body.style.overflow = 'visible';
            }}
            style={{
                position: 'fixed',
                display: 'none',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                cursor: 'pointer',
                overflowY: 'hidden'
            }}
            >

            <Box
                sx={{
                    width: '5.8vw',
                    height: '3vw',
                    backgroundColor: '#3989D8',
                    opacity: 0.5,
                    marginTop: '1vw',
                    marginLeft: '17.7vw'

                }}
            />
            
            <Box 
            sx={{
                width: '50vw',
                backgroundColor: '#3989D8',
                marginTop: '0.9vw',
                marginLeft: '10vw',
                borderRadius: '5px'
                

            }}
            >
                <Grid container spacing={2} style={{padding:'10px', paddingTop:'0px'}}>
                    <Grid item xs={3}>
                        <h3 style={{marginTop:'0px', marginBottom:'0px', color:'#FFFFFF'}}>Platform</h3>
                    </Grid>
                    <Grid item xs={3}>
                        <h3 style={{marginTop:'0px', marginBottom:'0px', color:'#FFFFFF'}}>Genres</h3>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <h3 style={{marginTop:'0px', marginBottom:'0px', color:'#FFFFFF'}}>Themes</h3>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>PC</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Action</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Adventure</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Anime</Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>PlayStation</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Casual</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Puzzle</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Horror</Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>Xbox Series</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Simulation</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Strategy</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Sci-fi</Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>Nintendo</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Sports</Item>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <Item>Mystery</Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>Wii</Item>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <Item>Survival</Item>
                    </Grid>
                </Grid>
            </Box>
            
            </div>
        );
    }
}
