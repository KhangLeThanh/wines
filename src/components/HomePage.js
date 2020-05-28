import React, { useEffect, useState, useCallback } from 'react'
import api from '../services/api';
import { makeStyles } from '@material-ui/core/styles';

import {Typography, Grid, Paper, Button} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import WinesDetails from './WinesDetails';
import WinesTables from './WinesTables';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop:'3em'
    },
    paper: {
        boxShadow:'none',
    },
    grid: {
        maxWidth: 1280,
        margin: '0 auto',
        backgroundColor:'#fff',
        padding:'20px',

    },
    wrapperContent:{
        padding:'20px 40px',
        [theme.breakpoints.down('xs')]: {
            padding:'20px 10px',
        },
    },
    table: {
        minWidth: 650,
        [theme.breakpoints.down('sm')]: {
            minWidth: 200,
         },
        [theme.breakpoints.down('xs')]: {
            minWidth: 150,
         },
         
    },
    tableCell: {
        borderBottom:'none'
    },
    TwoLastRow:{
        [theme.breakpoints.down('xs')]: {
           display:'none'
        },
    },
    button:{
        color:'blue',
    }
  }));
export default function HomePage(){
   
    const [wines, setWines] = useState([]) 
    const [isToggled, setIsToggled] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        api
            .getAll()
            .then(response => {
                setWines(response.data)
            })
            .catch(error => console.error(error));
    }, [])
    const toggle = useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
      );
    let array_wines = [];
    if(wines.items != null || wines.items === "undefined"){
        array_wines = Object.entries(wines.items)
    }
    const total_score = array_wines.reduce(
        (prevValue, currentValue) => prevValue + currentValue[1].score,0
    );
    let array_country = [];
    for(let i = 0; i<array_wines.length -1; i++){
        array_country.push(array_wines[i][1].country)
    }
    const  checked_country = (arr) => {
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }
    return(
        <div className={classes.root}>
            <div className={classes.grid}>
                <Grid container spacing={3} className={classes.wrapperContent}>
                    <Grid item xs={12} sm={12} md={12} style={{ paddingBottom:'20px', paddingTop:'40px'}}>
                        <Paper className={classes.paper}>
                            <Typography variant="h1" component="h1" style={{fontWeight:'700', fontSize:'40px'}}>
                                Wines
                            </Typography>
                        </Paper>
                        
                    </Grid>    
                     
                    <Grid item xs={12} sm={12} md={4} style={{paddingBottom:'30px', paddingTop:'40px'}}>
                        <Paper className={classes.paper}>
                            <Typography variant="body2"  style={{display:'block'}}>
                                Total rated wines
                            </Typography>
                            <Typography variant="h5" component="h5" style={{display:'block', fontWeight:'700'}}>
                                {array_wines.length} wines
                            </Typography>
                        </Paper>
                    </Grid>  
                    <Grid item xs={6} sm={6} md={4} style={{paddingBottom:'30px', paddingTop:'40px'}}>
                        <Paper className={classes.paper}>
                            <Typography variant="body2"  style={{display:'block'}}>
                                Average score
                            </Typography>
                            <Typography variant="h5" component="h5" style={{display:'block', fontWeight:'700'}}>
                                {total_score / array_wines.length} points
                            </Typography>
                        </Paper>
                    </Grid>      
                    <Grid item xs={6} sm={6} md={4} style={{paddingBottom:'30px', paddingTop:'40px'}}>
                        <Paper className={classes.paper}>
                            <Typography variant="body2"  style={{display:'block'}}>
                                Most represented country
                            </Typography>
                            <Typography variant="h5" component="h5" style={{display:'block', fontWeight:'700'}}>
                                {checked_country(array_country)}
                            </Typography>
                        </Paper>
                    </Grid>     
                    <Grid item xs={12} className={classes.BodyContent}>
                            <TableContainer component={Paper} style={{boxShadow:'none'}}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{color:'#929292'}}>Score</TableCell>
                                            <TableCell style={{color:'#929292'}}>Title</TableCell>
                                            <TableCell style={{color:'#929292'}}>Grape</TableCell>
                                            <TableCell style={{color:'#929292'}} className={classes.TwoLastRow}>Country</TableCell>
                                            <TableCell style={{color:'#929292'}} className={classes.TwoLastRow} >Year</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {isToggled === true ?
                                            array_wines.slice(0, 5).map((row) => (                                         
                                                <WinesTables key={row[0]} item={row}/>
                                            ))
                                            :
                                            array_wines.map((row) => (
                                                <WinesTables key={row[0]} item={row}/>
                                            ))
                                        }  
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid> 
                        <Grid item xs={12}>
                            <div style={{textAlign:'center', paddingTop:'1.5em'}}>
                                <Button className={classes.button}  onClick={toggle}>{isToggled === true ? 'Show More' : 'Show Less'}</Button>
                            </div>
                        </Grid>
                </Grid>                   
            </div>
        </div>
    )
    
}
