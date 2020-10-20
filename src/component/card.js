import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Card: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },

    fontSize: "14px",
  },
  widthCard: {
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "250px",
    },

    width: "200px",
    height: "400px",
  },
}));

const DisplayCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.widthCard}>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs>
          <Card>
            <CardContent>
              <img
                src={props.data.img}
                className={classes.cover}
                style={{ height: "100%", width: "100%" }}
              />
            </CardContent>
          </Card>

          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography component="p" variant="subtitle2" className={classes.Card} style={{marginTop:"5px"}} gutterBottom >
                {props.data.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.Card} style={{color:"red"}} gutterBottom>
                {props.data.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.Card}>
              Rs.{props.data.amount}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Rating className={classes.Card} name="read-only" value="4" size="small" readOnly />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.Card}
                style={{marginTop:"10px" , borderRadius:"50px" }}
              >
                Add 
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.Card}
                style={{marginTop:"10px",  borderRadius:"50px" , backgroundColor:"#f88822"}}
              >
                Wish
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default DisplayCard;
