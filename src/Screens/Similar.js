import { Component } from 'react';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import * as React from 'react';
import Grid from '@mui/material/Grid';

import {UniqueUserTable1,UniqueUserTable2,SharedGameTable} from './GameTable';

import Variables from "../variables.json";


export default class Similar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            sharedGames:Variables.sharedGames,
            uniquePedro:Variables.uniquePedro,
            uniqueCunha:Variables.uniqueCunha,
            mode:'Shared'
          };

        }

    render(){
        return (  
            <div>
                <Navbar/>
                
                <Grid container spacing={2} style={{ marginTop: '7px',marginBottom: '20px'}}>
                    <Grid item  xs={12} sx={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: '7px', marginBottom: '7px'}}>Shared Games between Cunha and Pedrocarush</h1>
                        { 

                            {
                              'Shared': <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button variant='contained'>Shared</Button>
                                            <Button onClick={()=> {this.setState({mode: 'Unique Pedrocarush'})}}>Unique Pedrocarush</Button>
                                            <Button onClick={()=> {this.setState({mode: 'Unique Cunha'})}}>Unique Cunha</Button>

                                        </ButtonGroup>,
                              'Unique Pedrocarush': <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                        <Button onClick={()=> {this.setState({mode: 'Shared'})}}>Shared</Button>
                                                        <Button variant='contained'>Unique Pedrocarush</Button>
                                                        <Button onClick={()=> {this.setState({mode: 'Unique Cunha'})}}>Unique Cunha</Button>
                                                    </ButtonGroup>,
                            'Unique Cunha':<ButtonGroup variant="outlined" aria-label="outlined button group">
                                                <Button onClick={()=> {this.setState({mode: 'Shared'})}}>Shared</Button>
                                                <Button onClick={()=> {this.setState({mode: 'Unique Pedrocarush'})}}>Unique Pedrocarush</Button>
                                                <Button variant='contained'>Unique Cunha</Button>
                                            </ButtonGroup>
                            }[this.state.mode]
     
                        }
                        
                    </Grid>
                </Grid>

                
                
                <Grid container spacing={5} style={{paddingTop: '0px'}}>
                    {
                        {
                        'Shared':       <Grid item xs={11}>
                                            <SharedGameTable shared={this.state.sharedGames}/>
                                        </Grid>,
                        'Unique Pedrocarush':<Grid item xs={11}>
                                                <UniqueUserTable1 unique={this.state.uniquePedro} user="Pedrocarush"/>
                                            </Grid>,
                        'Unique Cunha': <Grid item xs={11}>
                                            <UniqueUserTable2 unique={this.state.uniqueCunha} user="Cunha"/>
                                        </Grid>

                        }[this.state.mode]
                    }
                </Grid>

 
            </div>
        );

    }
}