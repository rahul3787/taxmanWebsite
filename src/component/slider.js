import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import image3 from "./image3.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor:"red",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {},

  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  slideHeading: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
  },

  slideDes: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px",
    },

    fontSize: "10px",
  },

  slideBtn: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },

    fontSize: "10px",
  },

  playIcon: {
    height: 38,
    width: 38,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  GridRoot: {
    [theme.breakpoints.down("sm")]: {
      height: "150px",
      backgroundColor: "red",
      opacity: "0.5",
    },
  },
}));
const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}

      <Carousel label="Get started" open={true} autoplay={true}>
        <Grid item xs={12} container className={classes.GridRoot}>
          <Grid item xs={6}>
            <img
              src={image3}
              className={classes.cover}
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{ backgroundColor: "#fff" }}
            container
            className={classes.SlideText}
          >
            <div className={classes.controls}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  className={classes.slideHeading}
                >
                  Lizard
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.slideDes}
                >
                  Lizards are a widespread group of squamate reptiles,
                </Typography>
                <Button color="primary" className={classes.slideBtn}>
                  Share
                </Button>
              </CardContent>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.GridRoot}>
          <Grid item xs={6}>
            <img
              src={image3}
              className={classes.cover}
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{ backgroundColor: "#fff" }}
            container
            className={classes.SlideText}
          >
            <div className={classes.controls}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  className={classes.slideHeading}
                >
                  Lizard
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.slideDes}
                >
                  Lizards are a widespread group of squamate reptiles,
                </Typography>
                <Button color="primary" className={classes.slideBtn}>
                  Share
                </Button>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Carousel>
    </div>
  );
};
const Slider = () => {
  const [handleOpen, setHandleOpen] = useState({ open: true });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      {/* <Button onClick={handleClick}>Open carousel</Button> */}
      <AutoRotatingCarouselModal />
    </>
  );
};
export default Slider;
