import { Component } from 'react';
import Navbar from './Navbar';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { LinearProgress } from '@mui/material'; 


export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    
    }

    render(){
        return (  
            <div>
                <Navbar/>
                <Grid sx={{ marginLeft: 10}} container spacing={2} style={{ marginTop: 5}}>
                    <Grid item  xs={10} sx={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: '7px', marginBottom: '7px'}}>Welcome to My Game List</h1>
                        <LinearProgress sx={{ bgcolor: '#87CEFA' }}/>
                    </Grid>  
                    <Grid item xs={10} >
                        <Card style={{marginTop: 8}}>
                            <CardMedia
                                component="video"
                                autoPlay
                                loop
                                image="/ea-mashup-video-v2.mp4"
                                alt="Games Mashup"
                            />
                        </Card>
                        <LinearProgress style={{marginTop: 12}} sx={{ bgcolor: '#87CEFA' }}/>
                    </Grid>
                   
                </Grid>
            </div>
        );
    }
}
