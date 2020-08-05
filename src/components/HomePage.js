import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import WinesTables from "./WinesTables";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "3em",
  },
  paper: {
    boxShadow: "none",
  },
  grid: {
    maxWidth: 1280,
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
  },
  wrapperContent: {
    padding: "20px 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 10px",
    },
  },
  table: {
    minWidth: 650,
    [theme.breakpoints.down("sm")]: {
      minWidth: 200,
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 150,
    },
  },
  tableCell: {
    borderBottom: "none",
  },
  TwoLastRow: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button: {
    color: "blue",
  },
}));

export default function HomePage({ data, loadMore, isLoading }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <Grid container spacing={3} className={classes.wrapperContent}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{ paddingBottom: "20px", paddingTop: "40px" }}
          >
            <Paper className={classes.paper}>
              <Typography
                variant="h1"
                component="h1"
                style={{ fontWeight: "700", fontSize: "40px" }}
              >
                Wines
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            style={{ paddingBottom: "30px", paddingTop: "40px" }}
          >
            <Paper className={classes.paper}>
              <Typography variant="body2" style={{ display: "block" }}>
                Total rated wines
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                style={{ display: "block", fontWeight: "700" }}
              >
                100 wines
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            style={{ paddingBottom: "30px", paddingTop: "40px" }}
          >
            <Paper className={classes.paper}>
              <Typography variant="body2" style={{ display: "block" }}>
                Average score
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                style={{ display: "block", fontWeight: "700" }}
              >
                456 points
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            style={{ paddingBottom: "30px", paddingTop: "40px" }}
          >
            <Paper className={classes.paper}>
              <Typography variant="body2" style={{ display: "block" }}>
                Most represented country
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                style={{ display: "block", fontWeight: "700" }}
              >
                France
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.BodyContent}>
            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "#929292" }}>Score</TableCell>
                    <TableCell style={{ color: "#929292" }}>Title</TableCell>
                    <TableCell style={{ color: "#929292" }}>Grape</TableCell>
                    <TableCell
                      style={{ color: "#929292" }}
                      className={classes.TwoLastRow}
                    >
                      Country
                    </TableCell>
                    <TableCell
                      style={{ color: "#929292" }}
                      className={classes.TwoLastRow}
                    >
                      Year
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((wine) => (
                    <WinesTables key={wine.id} item={wine} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <div style={{ textAlign: "center", paddingTop: "1.5em" }}>
              {isLoading ? (
                <Button className={classes.button}>Loading...</Button>
              ) : (
                <Button className={classes.button} onClick={loadMore}>
                  Show more
                </Button>
              )}{" "}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
