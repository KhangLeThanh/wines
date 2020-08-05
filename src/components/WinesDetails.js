import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  TopWrapperAction: {
    paddingBottom: "0px",
  },
  xButton: {
    fontSize: "1.3em",
  },
  Title: {
    paddingTop: "20px",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    "& h2": {
      fontWeight: "700",
      fontSize: "35px",
    },
  },
  WrapperContent: {
    paddingTop: "10px",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));
export default function WinesDetails({ detail, cid, handleClose }) {
  const classes = useStyles();

  detail.comments.sort(function (a, b) {
    return parseInt(b.upvotes) - parseInt(a.upvotes);
  });
  return (
    <div>
      <Paper className={classes.wrapperDialog}>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={cid}
          onClose={handleClose}
        >
          <DialogActions className={classes.TopWrapperAction}>
            <Button className={classes.xButton} onClick={handleClose}>
              X
            </Button>
          </DialogActions>
          <Grid container>
            <Grid item xs={6} sm={6} md={12}>
              <DialogTitle className={classes.Title} onClose={handleClose}>
                {detail.name}
              </DialogTitle>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <DialogContent className={classes.WrapperContent}>
                <Typography
                  variant="body2"
                  style={{
                    display: "block",
                    color: "#929292",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  Score:
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    display: "block",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {detail.score}
                </Typography>
              </DialogContent>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <DialogContent className={classes.WrapperContent}>
                <Typography
                  variant="body2"
                  style={{
                    display: "block",
                    color: "#929292",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  Grape:
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    display: "block",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {detail.grape}
                </Typography>
              </DialogContent>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <DialogContent className={classes.WrapperContent}>
                <Typography
                  variant="body2"
                  style={{
                    display: "block",
                    color: "#929292",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  Country:
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    display: "block",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {detail.country}
                </Typography>
              </DialogContent>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <DialogContent className={classes.WrapperContent}>
                <Typography
                  variant="body2"
                  style={{
                    display: "block",
                    color: "#929292",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  Year:
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    display: "block",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {detail.year}
                </Typography>
              </DialogContent>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <DialogContent className={classes.WrapperContent}>
                <Typography variant="body2" style={{ display: "block" }}>
                  Top Comments
                </Typography>
                <List>
                  {detail.comments.map((comment, idx) => (
                    <ListItem
                      key={idx}
                      style={{ borderBottom: "1px solid #ececec" }}
                    >
                      <ListItemText>{comment.text}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </DialogContent>
            </Grid>
          </Grid>
          <DialogActions>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                paddingBottom: "30px",
              }}
            >
              <Button color="primary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
}
