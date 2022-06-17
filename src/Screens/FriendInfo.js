import { Component } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Plot from './Plot';

import Variables from "../variables.json";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class FriendInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
          username: 'Cunha',
          stats:{playing: 45, completed: 123, onHold: 2, dropped: 32, planToPlay: 3},
          plot:{},
          top10:Variables.top10pedro,
        };
      }

    render(){
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <h2 style={{ marginTop: '7px', marginBottom: '0px'}}>List Statistics</h2>
                                </Grid>
                                <Grid item xs={4}>
                                <a href="/MyList" style={{ textDecoration: "none" }}>
                                <Button variant="contained">LIST</Button>
                                </a>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: '5px' }}/>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemButton
                                    onClick={() => { alert("playing") }}
                                    >
                                        <Avatar
                                            style={{ marginRight: '10px' }}
                                            sx={{ bgcolor: '#00FF00' ,width: 15, height: 15 }}
                                        >   </Avatar>
                                        <Grid container spacing={2}>
                                            <Grid item xs={11}>
                                                <ListItemText primary="Playing" />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <ListItemText primary={ this.state.stats.playing } />
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                    onClick={() => { alert("completed") }}
                                    >
                                        <Avatar
                                            style={{ marginRight: '10px' }}
                                            sx={{ bgcolor: '#0000FF' ,width: 15, height: 15 }}
                                        >   </Avatar>
                                        <Grid container spacing={2}>
                                            <Grid item xs={11}>
                                                <ListItemText primary="Completed" />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <ListItemText primary={ this.state.stats.completed } />
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                    onClick={() => { alert("onHold") }}
                                    >
                                        <Avatar
                                            style={{ marginRight: '10px' }}
                                            sx={{ bgcolor: '#FFFF00' ,width: 15, height: 15 }}
                                        >   </Avatar>
                                        <Grid container spacing={2}>
                                            <Grid item xs={11}>
                                                <ListItemText primary="On-Hold" />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <ListItemText primary={ this.state.stats.onHold } />
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                    onClick={() => { alert("dropped") }}
                                    >
                                        <Avatar
                                            style={{ marginRight: '10px' }}
                                            sx={{ bgcolor: '#FF0000' ,width: 15, height: 15 }}
                                        >   </Avatar>
                                        <Grid container spacing={2}>
                                            <Grid item xs={11}>
                                                <ListItemText primary="Dropped" />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <ListItemText primary={ this.state.stats.dropped } />
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                    onClick={() => { alert("plantoplay") }}
                                    >
                                        <Avatar
                                            style={{ marginRight: '10px' }}
                                            sx={{ bgcolor: '#808080' ,width: 15, height: 15 }}
                                        >   </Avatar>
                                        <Grid container spacing={2}>
                                            <Grid item xs={11}>
                                                <ListItemText primary="Plan To Play" />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <ListItemText primary={ this.state.stats.planToPlay } />
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemButton
                                    onClick={() => { alert("total") }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={11}>
                                                <ListItemText primary="Total" />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <ListItemText primary={ 
                                                    this.state.stats.playing +
                                                    this.state.stats.completed +
                                                    this.state.stats.onHold +
                                                    this.state.stats.dropped +
                                                    this.state.stats.planToPlay
                                                    } />
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>
                            <Plot/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <h2 style={{ marginBottom: '0px', marginTop: '10px', textAlign:'left' }} >TOP10 of { this.state.username }</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {this.state.top10.map((val, index) => {
                                return (
                                <Grid item xs={2.4}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: 300,
                                            backgroundColor: 'D3D3D3',
                                            '&:hover': {
                                            backgroundColor: 'D3D3D3',
                                            opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                    >
                                        <a href="/GamePage" style={{ textDecoration: "none"}}>
                                        <Item>
                                            <img src= { this.state.top10[index].img } alt="ERROR" width="100%" height="256"/>
                                            <h3 style={{ marginBottom: '0px', marginTop: '0px' }} > { "#" + (index+1) + " " + this.state.top10[index].title} </h3>
                                        </Item>
                                        </a>
                                    </Box>
                                </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}