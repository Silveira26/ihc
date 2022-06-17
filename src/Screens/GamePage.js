import { Component } from 'react';
import Navbar from './Navbar';
import GameSideBar from './GameSideBar';
import GameInfo from './GameInfo';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#87CEFA',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

export default class GamePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    
    }

    render(){
        return (  
            <div>
                <Navbar/>
                <Grid container spacing={2} style={{ marginTop: '0px'}}>
                    <Grid item xs={3}>
                        <Item><GameSideBar/></Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item><GameInfo/></Item>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
