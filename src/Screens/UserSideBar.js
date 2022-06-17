import { Component } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import Variables from "../variables.json";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 

export default class UserSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: {name:"Pedrocarush",img: "/avatar/Pedrocarush.webp"},
          friends: Variables.friendsPedro,
          textFieldValue:"",
        };
      }

      _filterFriends = (e) => {
          
        if (e.key === 'Enter') {
         
         if(e.target.value===""){
            this.setState(this.state.friends = Variables.friendsPedro);
         }else{
            this.setState(this.state.friends = Variables.friendsPedro);
            this.setState(this.state.friends = this.state.friends.filter(friend => friend.name.toLowerCase().includes(e.target.value.toLowerCase())));
        }
        }
      }

      filterFriends(input) {
          console.log(input);
        if(input===""){
            this.setState(this.state.friends = Variables.friendsPedro);
         }else{
            this.setState(this.state.friends = Variables.friendsPedro);
            this.setState(this.state.friends = this.state.friends.filter(friend => friend.name.toLowerCase().includes(input.toLowerCase())));
        }
      }

      _handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
        }

    render(){
        return (
            <div>
                <Item>
                    <h2 style={{ marginTop: '7px', marginBottom: '0px'}} >{ this.state.user.name }</h2>
                </Item>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginBottom: '20px', marginTop: '20px'}}>
                    <Avatar 
                        alt="ERROR"
                        src={ this.state.user.img }
                        sx={{ width: "16.5vw", height: "16.5vw" }}
                    />
                </div>
                <Item>
                    <div style={{ marginBottom: '5px'}}>
                        <Grid container spacing={0}>
                            <Grid item xs={10}>
                                <TextField fullWidth id="outlined-basic" label="Search for friends" value={this.state.textFieldValue} onChange={this._handleTextFieldChange} variant="outlined" onKeyDown={this._filterFriends}/>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton >
                                    <SearchIcon fontSize='large' value="a" onClick={() => this.filterFriends(this.state.textFieldValue)}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <List 
                        sx={{
                            height: "38.5vw",
                            overflow: 'auto'
                        }}
                    >
                        {this.state.friends.map((val, index) => {
                            return (
                            <a href="/FriendPage" style={{ textDecoration: "none", color: "#000000" }}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar 
                                        alt="ERROR"
                                        src={val.img}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={val.name}
                                />
                            </ListItemButton>
                            </a>
                            );
                        })}
                    </List>
                </Item>
            </div>
        )
    }
}