import { Component } from 'react';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog  from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';


import Variables from "../variables.json";



const statusColors = [
    {
      id: 'Playing',
      color: '#1565c0',
    },
    {
      id: 'Completed',
      color: '#388e3c',
    },
    {
      id: 'On Hold',
      color: '#fbc02d',
    },
    {
      id: 'Dropped',
      color: '#d32f2f',
    },
    {
      id: 'Plan To Play',
      color: '#af52bf',
    },
    {
      id: 'Not played',
      color: '#9e9e9e',
    },
  ];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#32527b",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

class FilteredGameTable extends Component {
    saveStateToLocalStorage = () => { 
      localStorage.setItem('Games', JSON.stringify(this.state.topGames)); 
      console.log("Saved to local storage");
    }

    // Fetch data from local storage 
    getStateFromLocalStorage = () => { 
      let data = localStorage.getItem('Games'); 
      console.log(data);
      if(data !== null) {
        this.setState({topGames:JSON.parse(data)}); 
      }else{
        this.saveStateToLocalStorage();
      }
    }

    componentDidMount() { 
      // Fetch data from local storage 
      this.getStateFromLocalStorage(); 
      console.log("Component mounted");
    }



    constructor(props) {
        super(props);
        this.state = {
          popupReview: false,
          tempRank: 1,
          review: "",
          "topGames" : Variables.topGames
        };
      }

    render(){
        return (
          <div>
            <TableContainer sx={{ marginLeft: '4%'}} component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow key="Rank">
                    <StyledTableCell align="left" sx={{width: '1%'}} ></StyledTableCell>
                    <StyledTableCell align="center" >Rank</StyledTableCell>
                    <StyledTableCell align="center">Art</StyledTableCell>
                    <StyledTableCell align="center">Title</StyledTableCell>
                    <StyledTableCell align="center">Year</StyledTableCell>
                    <StyledTableCell align="center">Score</StyledTableCell>
                    <StyledTableCell align="center">Your Score</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Review</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.topGames.filter(game => this.props.filtro==="All" ? game.status!== "Not played" : game.status===this.props.filtro).filter(game => this.props.game==="" ? game : game.title.toLowerCase().includes(this.props.game.toLowerCase())).map((val, index) => {
                    return (
                        <StyledTableRow key={val.rank}>
                          {statusColors.filter(color => color.id === val.status).map(filteredColor => (
                            <TableCell scope="row" sx={{backgroundColor: filteredColor.color }}></TableCell>
                          ))}
                          <StyledTableCell align="center" scope="row">{val.rank}</StyledTableCell>
                          <StyledTableCell align="center" scope="row" component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                          <StyledTableCell component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.title}</h3></StyledTableCell>
                          <StyledTableCell align="center">{val.year}</StyledTableCell>
                          <StyledTableCell align="center">{val.score}</StyledTableCell>
                          <StyledTableCell align="center">
                          
                          <Rating name="no-value" value={val.yourScore} max={10} style={{marginTop:'0.3vw'}}
                            onChange={(event, newValue) => {
                              var gamesCopy = this.state.topGames;
                              gamesCopy[val.rank-1].yourScore = newValue;
                              this.setState({
                                topGames: gamesCopy
                              })
                             this.saveStateToLocalStorage();
                            
                          }}/>
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                  <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={val.status}
                                  label="Select"
                                  onChange={(event) => {
                                    var gamesCopy = this.state.topGames;
                                    gamesCopy[val.rank-1].status = event.target.value;
                                    this.setState({
                                        topGames: gamesCopy
                                    })
                                    this.saveStateToLocalStorage();
                                  }}
                                  >
                                  {Variables.status.map((val2, index) => {
                                      return (
                                          <MenuItem value={val2.status}>{val2.status}</MenuItem>
                                      );
                                  })}
                                  </Select>
                              </FormControl>
                            </Box>
                          </StyledTableCell>
                          <StyledTableCell align="center" scope="row">
                            <IconButton onClick={() => {this.setState( {popupReview: true,tempRank:val.rank} ) }} aria-label="fingerprint" size="large" style={{marginTop:'0.6vw',marginLeft:'1vw' }}>
                              <AddBoxIcon fontSize="inherit"/>
                            </IconButton>
                            <Dialog
                                        open={this.state.popupReview}
                                        onClose={() => {this.setState( {popupReview: false} )}}
                                    >
                                        <DialogTitle>{"Review"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>

                                                <Grid container spacing={2}>
                                                    <Grid item xs={5}>
                                                    </Grid>
                                                        <TextField
                                                            style={{ marginTop: '5px', width:'100%'}}
                                                            id="outlined-multiline-static"
                                                            label="Write Review"
                                                            multiline
                                                            rows={10}
                                                            placeholder={this.state.topGames[this.state.tempRank-1].review}
                                                            
                                                            onBlur={(event) => {
                                                              
                                                                this.setState({
                                                                    review: event.target.value
                                                                })
                                                            }}
                                                        />
                                                    
                                                    </Grid>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={() => {this.setState( {popupReview: false} )}}>Cancel</Button>
                                        <Button onClick={() => {var trueIndex = this.state.tempRank-1;
                                                              var gamesCopy = this.state.topGames;
                                                              gamesCopy[trueIndex].review = this.state.review;
                                                              this.setState({
                                                                  topGames: gamesCopy,
                                                                  popupReview: false
                                                              })
                                                              this.saveStateToLocalStorage();}} autoFocus>OK</Button>
                                        </DialogActions>
                                    </Dialog>        
                          </StyledTableCell>
                      </StyledTableRow>
                      );
                  })}
                </TableBody>
              </Table>
            </TableContainer> 
          </div>
        );
    }
}


class NormalGameTable extends Component {
  saveStateToLocalStorage = () => { 
    localStorage.setItem('Games', JSON.stringify(this.state.topGames)); 
    console.log("Saved to local storage");
  }

  // Fetch data from local storage 
  getStateFromLocalStorage = () => { 
    let data = localStorage.getItem('Games'); 
    console.log(data);
    if(data !== null) {
      this.setState({topGames:JSON.parse(data)}); 
    }else{
      this.saveStateToLocalStorage();
    }
    
  }

  componentDidMount() { 
    // Fetch data from local storage 
    this.getStateFromLocalStorage(); 
    console.log("Component mounted");
  } 
  constructor(props) {
      super(props);
      this.state = {
        "topGames" : Variables.topGames
      };
    }

  render(){
      return (
        <div>
          <TableContainer sx={{ marginLeft: 8}} component={Paper}>
            <Table  sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="left" sx={{width: '1%',flex: 1}} ></StyledTableCell>
                  <StyledTableCell align="center" >Rank</StyledTableCell>
                  <StyledTableCell align="center">Art</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Year</StyledTableCell>
                  <StyledTableCell align="center">Score</StyledTableCell>
                  <StyledTableCell align="center">Your Score</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.state.topGames.map((val, index) => {
                  return (
                    <StyledTableRow key={val.rank}>
                      {statusColors.filter(color => color.id === val.status).map(filteredColor => (
                        <TableCell scope="row" sx={{backgroundColor: filteredColor.color }}></TableCell>
                      ))}
                      <StyledTableCell align="center" scope="row">{val.rank}</StyledTableCell>
                      <StyledTableCell align="center" scope="row" component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                      <StyledTableCell component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.title}</h3></StyledTableCell>
                      <StyledTableCell align="center">{val.year}</StyledTableCell>
                      <StyledTableCell align="center">{val.score}</StyledTableCell>
                      <StyledTableCell align="center">
                      <Rating name="no-value" value={val.yourScore} max={10} style={{marginTop:'0.3vw'}}
                            onChange={(event, newValue) => {
                              var gamesCopy = this.state.topGames;
                              gamesCopy[val.rank-1].yourScore = newValue;
                              this.setState({
                                topGames: gamesCopy
                              })
                             this.saveStateToLocalStorage();
                            
                          }}/>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Status</InputLabel>
                              <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={val.status}
                              label="Select"
                              onChange={(event) => {
                                var gamesCopy = this.state.topGames;
                                gamesCopy[index].status = event.target.value;
                                this.setState({
                                    topGames: gamesCopy
                                })
                                this.saveStateToLocalStorage();
                              }}
                              >
                              {Variables.status.map((val, index) => {
                                  return (
                                      <MenuItem value={val.status}>{val.status}</MenuItem>
                                  );
                              })}
                              </Select>
                          </FormControl>
                        </Box>
                      </StyledTableCell>
                  </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}


class SearchGameTable extends Component {


  saveStateToLocalStorage = () => { 
    localStorage.setItem('Games', JSON.stringify(this.state.topGames)); 
    console.log("Saved to local storage");
  }

  // Fetch data from local storage 
  getStateFromLocalStorage = () => { 
    let data = localStorage.getItem('Games'); 
    console.log(data);
    if(data !== null) {
      this.setState({topGames:JSON.parse(data)}); 
    }else{
      this.saveStateToLocalStorage();
    }

   
    
  }

  componentDidMount() { 
    // Fetch data from local storage 
    this.getStateFromLocalStorage(); 
    console.log("Component mounted");
  } 
  constructor(props) {
      super(props);
      this.state = {
        "topGames" : Variables.topGames
      };
    }

  render(){
      return (
        <div>
          <TableContainer sx={{ marginLeft: '4%'}} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="left" sx={{width: '1%'}} ></StyledTableCell>
                  <StyledTableCell align="center" >Rank</StyledTableCell>
                  <StyledTableCell align="center">Art</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Year</StyledTableCell>
                  <StyledTableCell align="center">Score</StyledTableCell>
                  <StyledTableCell align="center">Your Score</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.state.topGames.filter(game => this.props.game==="" ? game : game.title.toLowerCase().includes(this.props.game)).map((val, index) => {
                  return (
                      <StyledTableRow key={val.rank}>
                        {statusColors.filter(color => color.id === val.status).map(filteredColor => (
                          <TableCell scope="row" sx={{backgroundColor: filteredColor.color }}></TableCell>
                        ))}
                        <StyledTableCell align="center" scope="row">{val.rank}</StyledTableCell>
                        <StyledTableCell component={Link} to="/GamePage" style={{ textDecoration: "none"}} align="center" scope="row" sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                        <StyledTableCell component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.title}</h3></StyledTableCell>
                        <StyledTableCell align="center">{val.year}</StyledTableCell>
                        <StyledTableCell align="center">{val.score}</StyledTableCell>
                        <StyledTableCell align="center">
                        <Rating name="no-value" value={val.yourScore} max={10} style={{marginTop:'0.3vw'}}
                            onChange={(event, newValue) => {
                              var gamesCopy = this.state.topGames;
                              gamesCopy[val.rank-1].yourScore = newValue;
                              this.setState({
                                topGames: gamesCopy
                              })
                             this.saveStateToLocalStorage();
                            
                          }}/>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={val.status}
                                label="Select"
                                onChange={(event) => {
                                  var gamesCopy = this.state.topGames;
                                  gamesCopy[val.rank-1].status = event.target.value;
                                  this.setState({
                                      topGames: gamesCopy
                                  })
                                  this.saveStateToLocalStorage();
                                }}
                                >
                                {Variables.status.map((val, index) => {
                                    return (
                                        <MenuItem value={val.status}>{val.status}</MenuItem>
                                    );
                                })}
                                </Select>
                            </FormControl>
                          </Box>
                        </StyledTableCell>
                    </StyledTableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}


class SearchUserTable extends Component {

  constructor(props) {
      super(props);
      this.state = {
        "users" : Variables.users
      };
    }

  render(){
      return (
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="center">Avatar</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.filter(user => user.name.toLowerCase().includes(this.props.name)).map((val, index) => {
                  return (
                      <StyledTableRow component={Link} to="/FriendPage" style={{ textDecoration: "none"}}>
                        <StyledTableCell align="center" scope="row" sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.img}/>}/></StyledTableCell>
                        <StyledTableCell sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.name}</h3></StyledTableCell>
                      </StyledTableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}

class UniqueUserTable1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
        unique : props.unique,
        user:props.user
      };
    }

  render(){
      return (
        <div>
          <TableContainer  sx={{ marginLeft: '4%'}} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="center">Art</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">{this.state.user} Score</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.state.unique.map((val, index) => {
                  return (
                      <StyledTableRow style={{ textDecoration: "none"}}>
                        <StyledTableCell align="center" scope="row" component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>

                        <StyledTableCell component={Link} to="/GamePage"  scope="row" sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center"}} align="center"><h3>{val.title}</h3></StyledTableCell>
                        <StyledTableCell  sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.score}</h3></StyledTableCell>
                      </StyledTableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}

class UniqueUserTable2 extends Component {

  constructor(props) {
      super(props);
      this.state = {
        unique : props.unique,
        user:props.user
      };
    }

  render(){
      return (
        <div>
          <TableContainer  sx={{ marginLeft: '4%'}} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="center">Art</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">{this.state.user} Score</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.state.unique.map((val, index) => {
                  return (
                      <StyledTableRow style={{ textDecoration: "none"}}>
                        <StyledTableCell align="center" scope="row" component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                        
                        <StyledTableCell component={Link} to="/GamePage" sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center"}} align="center"><h3>{val.title}</h3></StyledTableCell>
                        <StyledTableCell  sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.score}</h3></StyledTableCell>
                      </StyledTableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}
class SharedGameTable extends Component {

  constructor(props) {
      super(props);
      this.state = {
        shared : props.shared,
      };
    }

  render(){
      return (
        <div>
          <TableContainer  sx={{ marginLeft: '4%'}} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="center">Art</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Cunha Score</StyledTableCell>
                  <StyledTableCell align="center">Pedrocarush Score</StyledTableCell>
                  <StyledTableCell align="center">Difference </StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.shared.map((val, index) => {
                  return (
                      <StyledTableRow style={{ textDecoration: "none"}}>
                        <StyledTableCell align="center" scope="row" component={Link} to="/GamePage" style={{ textDecoration: "none"}} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                        
                        <StyledTableCell  component={Link} to="/GamePage" sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center"}} align="center"><h3>{val.title}</h3></StyledTableCell>
                        <StyledTableCell  sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.cunhaScore}</h3></StyledTableCell>
                        <StyledTableCell  sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.pedroScore}</h3></StyledTableCell>
                        <StyledTableCell  sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.difference}</h3></StyledTableCell>

                      </StyledTableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}

export {FilteredGameTable, NormalGameTable, SearchGameTable, SearchUserTable, UniqueUserTable1,UniqueUserTable2,SharedGameTable};