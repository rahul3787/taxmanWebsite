import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red, blue, green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Slider from "./slider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DisplayCard from "./card";
import bitmap from "./Bitmap.png";
import Book from "./book1.png";
import Vol from "./vol2L.png";
import { Box, Divider, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textR: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginLeft: "8px",
     
    },
   
    fontSize: "20px",
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },

    fontSize: "20px",
  },
  marginT: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-20px",
      
    },

    marginTop:"-10px",
    
  },
  textRight: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "60px",
      fontSize: "12px",

    },

    marginLeft: "450px",
    fontSize: "20px",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  console.log(props);
  let defaultStates = [
    {
      img: bitmap,
      title: "income tax rules with master",
      name: "rahul",
      amount: "500",
      
    },
    {
      img: Book,
      title: "income tax rules with master",
      name: "rahul",
      amount: "500",
      
    },
    {
      img: Vol,
      title: "income tax rules with master",
      name: "rahul",
      amount: "500",
      
    },
    {
      img: Vol,
      title: "income tax rules with master",
      name: "rahul",
      amount: "500",
      
    },
    {
      img: bitmap,
      title: "income tax rules with master",
      name: "rahul",
      amount: "500",
      
    },
    {
      img: Book,
      title: "income tax rules with master",
      name: "rahul",
      amount: "500",
      note: "this is desktop view",
    },
  ];

  const [homeCard, setHomeCard] = useState(defaultStates);
  const [hideBtn, setHideBtn] = useState(false);
  const hideMenu = () => {
    console.log("button click");

    if (hideBtn == true) {
      setHideBtn(false);
    } else {
      setHideBtn(true);
    }
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Slider />
        </Grid>
        <Grid
          container
          direction="row"
          className={classes.textR}
          alignItems="flex-start"
          style={{ marginTop: "-50px" }}
        >
          <Typography
            className={classes.textR}
            align="right"
            variant="h6"
            gutterBottom
          >
            recommended for you
          </Typography>
          <IconButton
            aria-label="delete"
            className={classes.margin}
            size="small"
          >
            <ExpandMoreIcon className={classes.right} fontSize="inherit" />
          </IconButton>
          <Typography className={classes.textRight} align="left" variant="h6">
            <Link>view all</Link>
          </Typography>
        </Grid>

        {homeCard.map((val, index) => {
          return (
            <span
              style={{
                height: "25%",
                width: "25%",
                marginLeft: "30px",
                marginRight:"20px",
                marginBottom: "100px",
               
              }}
              className={classes.marginT}
            >
              <DisplayCard key={index} data={val} />
            </span>
          );
        })}
      </Grid>
      <Divider />
      <Grid container spacing={3} >
        <Grid
          container
          direction="row"
          className={classes.textR}
          alignItems="flex-start"
          style={{ marginTop: "20px" }}
        >
          <Typography
            className={classes.textR}
            align="right"
            variant="h6"
            gutterBottom
          >
            recommended for you
          </Typography>
          <IconButton
            aria-label="delete"
            className={classes.margin}
            size="small"
          >
            <ExpandMoreIcon className={classes.right} fontSize="inherit" />
          </IconButton>
          <Typography className={classes.textRight} align="left" variant="h6">
            <Link>view all</Link>
          </Typography>
        </Grid>
        {homeCard.map((val, index) => {
          return (
            <span
              style={{
                height: "25%",
                width: "25%",
                marginLeft: "30px",
                marginRight:"20px",
                marginBottom: "60px",
                marginTop: "20px",
              }}
            >
              <DisplayCard key={index} data={val} />
            </span>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
