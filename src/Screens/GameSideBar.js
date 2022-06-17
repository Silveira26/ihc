import { Component } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class GameSideBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: "Far Cry",
            score: 8.65,
            icon: '/games/farCry/icon.png',
            platforms: ["PC", "PS3", "XBOX"],
            developer: "Crytek Studios",
            releaseDate: "23/03/2004",
            notes:"Add your Notes Here..."
        }
    }

    saveStateToLocalStorage = (notesIn) => { 
        localStorage.setItem('GameNotes', notesIn); 
        console.log("Saved to local storage");
      }
  
      // Fetch data from local storage 
      getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('GameNotes'); 
        console.log(data);
        if(data !== null) {
          this.setState({notes : data})
        }else{
          this.saveStateToLocalStorage("Add your Notes Here...");
        }
      }
  
      componentDidMount(){ 
        // Fetch data from local storage 
        this.getStateFromLocalStorage(); 
        console.log("Component mounted");
      } 

      _handleTextFieldChange = (e) => {
        this.setState({
            notes: e.target.value
        });
        this.saveStateToLocalStorage(e.target.value);
        }

    render(){
        return (  
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={9.5}>
                        <Item>
                            <h2 style={{ marginTop: '0px', marginBottom: '0px'}} >{ this.state.name }</h2>
                        </Item>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Item>
                            <h2 style={{ marginTop: '0px', marginBottom: '0px'}} >{ this.state.score }</h2>
                        </Item>
                    </Grid>
                </Grid>
                <Item style={{ marginTop: '15px', marginBottom: '15px'}} >
                    <img src= { this.state.icon } alt="ERROR" width="100%" height="435"/>
                </Item>
                <Stack direction="row" spacing={2}>
                    {this.state.platforms.map((val, index) => {
                        return (<Item> {val} </Item>);}
                    )}
                </Stack>
                <Item style={{ marginTop: '15px', marginBottom: '0px'}}>
                    <h2 style={{ marginTop: '0px', marginBottom: '0px', textAlign: 'left' }} > Developer: { this.state.developer }</h2>
                    <h2 style={{ marginTop: '5px', marginBottom: '0px', textAlign: 'left' }} > Release Date: { this.state.releaseDate }</h2>
                </Item>
                <Item style={{ marginTop: '15px'}}>
                    <TextField
                        style={{ marginTop: '5px', width:'100%'}}
                        id="outlined-multiline-static"
                        label="Personal Notes"
                        multiline
                        rows={29}
                        defaultValue="Add your Notes Here..."
                        value={this.state.notes}
                        onChange={this._handleTextFieldChange}
                    />
                </Item>
            </div>
        );
    }
}
