import { Component } from 'react';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import * as React from 'react';
import Grid from '@mui/material/Grid';

import {SearchGameTable, SearchUserTable} from './GameTable';

import Variables from "../variables.json";


export default class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topGames:Variables.topGames,
            search:'ERROR',
            searchType:'Games'
          };

        }
    
        _handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                alert(e.target.value) // e.target.value -> name of the game
            }
        }

        getStateFromLocalStorage = () => { 
            let data = localStorage.getItem('Search'); 
            console.log(data);
            if(data !== null) {
              this.setState({search : data})
            }else{
              alert("Error getting data from local storage");
            }
            
        }

        componentDidMount() { 
            // Fetch data from local storage 
            this.getStateFromLocalStorage(); 
            console.log("Component mounted");
          } 

    render(){
        return (  
            <div>
                <Navbar/>
                
                <Grid container spacing={2} style={{ marginTop: '7px',marginBottom: '20px'}}>
                    <Grid item  xs={12} sx={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: '7px', marginBottom: '7px'}}>Search Results for "{this.state.search}"</h1>
                        {   
                            this.state.searchType === 'Games' ?
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button size="large" sx={{ m: 1.5 }} variant='contained'>Games</Button>
                                <Button size="large" sx={{ m: 1.5 }} onClick={()=> {this.setState({searchType: 'Users'})}}>Users</Button>
                            </ButtonGroup>
                            :
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button size="large" sx={{ m: 1.5 }} onClick={()=> {this.setState({searchType: 'Games'})}}>Games</Button>
                                <Button size="large" sx={{ m: 1.5 }} variant='contained'>Users</Button>
                            </ButtonGroup>
                        }
                        
                    </Grid>
                </Grid>

                
                
                <Grid container spacing={5} style={{paddingTop: '0px'}}>
                    {   
                        this.state.searchType === 'Games' ?
                        <Grid item xs={11}>
                            <SearchGameTable game={this.state.search.toLowerCase()} />
                        </Grid>
                        :
                        <Grid item xs={6} style={{ width:'50%', margin: 'auto' }}>
                            <SearchUserTable name={this.state.search.toLowerCase()} />
                        </Grid>
                    }
                </Grid>

 
            </div>
        );

    }
}