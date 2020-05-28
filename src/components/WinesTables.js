import React, {  useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import WinesDetails from './WinesDetails';
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        [theme.breakpoints.down('sm')]: {
            minWidth: 200,
         },
        [theme.breakpoints.down('xs')]: {
            minWidth: 150,
         },
         
    },
    tableRow:{
        '&:hover': {
            cursor:'pointer',
            "& td":{
                color: 'blue',

            }
        },
    },
    tableCell: {
        borderBottom:'none',
       
    },
    TwoLastRow:{
        [theme.breakpoints.down('xs')]: {
           display:'none'
        },
    },
}))
export default function WinesTables({item}){
    const classes = useStyles();

    const [id, setId] = useState('');
    const PopUpButton = (id) => {
        setId(id)
    }
    const handleClose = () => {
        setId('')
    };
    return(
            <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}  scope="row" onClick={()=>PopUpButton(item[0])} >{item[1].score}</TableCell>
                <TableCell className={classes.tableCell} onClick={()=>PopUpButton(item[0])}>{item[1].name} </TableCell>
                <TableCell className={classes.tableCell} onClick={()=>PopUpButton(item[0])} >{item[1].grape}</TableCell>
                <TableCell className={classes.TwoLastRow} onClick={()=>PopUpButton(item[0])} style={{borderBottom:'none'}}>{item[1].country}</TableCell>
                <TableCell className={classes.TwoLastRow} onClick={()=>PopUpButton(item[0])} style={{borderBottom:'none'}}>{item[1].year}</TableCell>
                {item[0] === id ? <WinesDetails detail={item[1]} cid={item[0]} handleClose={handleClose}/> : <div></div>}
            </TableRow>
    )
}