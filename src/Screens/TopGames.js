import { Component } from 'react';
import Navbar from './Navbar';

import * as React from 'react';
import Grid from '@mui/material/Grid';

import {NormalGameTable} from './GameTable';

import Variables from "../variables.json";

export default class TopGames extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topGames:Variables.topGames
          };

        }
    

    render(){
        return (  
            <div>
                <Navbar/>
                
                <Grid container spacing={2} style={{ marginTop: '7px',marginBottom: '20px'}}>
                    <Grid item  xs={12} sx={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: '7px', marginBottom: '7px'}}>Top Games</h1>
                    </Grid>
                </Grid>
                
                <Grid container spacing={3} style={{  marginTop: '0px'}}>
                    <Grid item xs={11}>
                        <NormalGameTable/>
                    </Grid>
                </Grid>

 
            </div>
        );

    }
}