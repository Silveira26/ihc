import { Component } from 'react';
import Navbar from './Navbar';
import FriendSideBar from './FriendSideBar';
import FriendInfo from './FriendInfo';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#87CEFA',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

export default class FriendPage extends Component {
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
                        <Item><FriendSideBar/></Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item><FriendInfo/></Item>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
