import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import icon11 from "./icon11.svg";
import icon12 from "./icon12.svg";
import icon13 from "./icon13.svg";
import "./offer.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import OfferCard from "./offerCard"
import Cardimg from "./image1.png"
import Cardimg2 from "./image2.png"
const theme = createMuiTheme({
  overrides: {
   
    MuiAvatar: {
     
      img: {
        objectFit: "contain",
      },
    },
  },
});
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  root: {
    width: "100%",
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.down("sm")]: {
    
      height: "250px",
      width: "250px",
      position: "relative",
      left: "120px",
    },
  },
  inline: {
    display: "inline",
  },
  large: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1),
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    margin: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  forntR: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },

    fontSize: "13px",
  },
  Offer :{
    [theme.breakpoints.down("sm")]: {
        position: "relative",
        left: "120px",
      },
  },
  ListR: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },

    fontSize: "13px",
  },
  offerCard: {
  [theme.breakpoints.down("sm")]: {
     
    height: "100px",
    width: "400px",
    position: "relative",
    left: "120px",
  }
}
}));
const Offer = (props) => {
  const classes = useStyles();
  let defaultStates = [
    {
      img: Cardimg,
      title: "Super deal of a life",
      note: "Get 2 modules at a price of",
    },
    {
      img: Cardimg2,
      title: "Books under rs 599 only",
      note: "5000+ books on a income tax and corporate tax",
    },
    {
      img: Cardimg,
       title: "Super deal of a life",
      note: "Get 2 modules at a price of",
    },
    {
      img: Cardimg2,
      title: "Books under rs 599 only",
      note: "5000+ books on a income tax and corporate tax",
    
    },
   
  ];

  const [offerCard, setOfferCard] = useState(defaultStates);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <List className={classes.root}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Avatar
                    alt="Remy Sharp"
                    variant="square"
                    className={classes.large}
                  
                    
                    src={icon13}
                  />
                </ThemeProvider>
              </ListItemAvatar>
              <ListItemText
                primary="quick delivery"
                style={{ margin: "20px" }}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.forntR}
                    color="textPrimary"
                  >
                    fedex courier is in most of site
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Avatar
                    alt="TravisHoward"
                    variant="square"
                    className={classes.large}
                    srcset="string"
                    style={{ objectFit: "contain" }}
                    src={icon11}
                  />
                </ThemeProvider>
              </ListItemAvatar>
              <ListItemText
                primary="free shipping "
                style={{ margin: "10px" }}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.forntR}
                    color="textPrimary"
                  >
                    Across india on order above rs 350
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Avatar
                    variant="square"
                    className={classes.large}
                    
                    src={icon12}
                  />
                </ThemeProvider>
              </ListItemAvatar>
              <ListItemText
                primary="secure payment "
                style={{ margin: "10px" }}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.forntR}
                    color="textPrimary"
                  >
                    taxman provide secure payment
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Typography gutterBottom variant="h5" className={classes.Offer} style={{marginTop:"20px"}} component="h2">
          Offers
          </Typography>
        <Grid container spacing={3} className={classes.offerCard} style={{marginBottom:"25px"}}> 
          <Grid item xs={12}>
          {offerCard.map((val, index) => {
          return (
            <span
              style={{
                height: "25%",
                width: "25%",
                marginLeft: "30px",
                marginRight:"20px",
                marginBottom: "60px",
              }}
              className={classes.marginT}
            >
              <OfferCard key={index} CardData={val} />
            </span>
          );
        })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Offer;
