import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";

import google_play_badge from "./Assets/google-play-badge.png";

import app_store from "./Assets/app-store.png";

import Linkedin from "./Assets/Linkedin.svg";
import facebook from "./Assets/Facebook.svg";
import Twitter from "./Assets/Twitter.svg";
import youtube from "./Assets/youtube.svg";

import NameLogo from "./Assets/name_log.svg";

const useStyles = makeStyles((theme) => ({
  rootGrid:{
    [theme.breakpoints.down('sm')]:{
      marginTop:"1000px"
    }
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  footerLogoImg: {
    [theme.breakpoints.down("sm")]: {
      width: "90px",
    },
  },

  fontSizeText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },

  imgStyle: {
    height: "25px",
    width: "25px",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: "12px",
      width: "12px",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.rootGrid}>
        <Grid item xs={12} container spacing={3}>
          <Hidden smDown>
            <Grid item xs={1}>
            </Grid>
          </Hidden>

          <Grid item xs={3} sm={3} container direction="column">
            <Grid item xs={12} sm={12}>
              <img src={NameLogo} className={classes.footerLogoImg} />
              <p style={{ marginTop: "0px" }} className={classes.fontSizeText}>
                Tax & Corporate Laws of INDIA
              </p>{" "}
            </Grid>

            <Grid item xs={12} sm={12}>
              <p className={classes.fontSizeText}>
                Everythings you need on Income Tax, <br />
                GST and Corporate Laws, Authentic <br />
                databases, books, journals, Pratice <br />
                and Exam platforms <br />
              </p>
            </Grid>

            {/* Download Img PC */}
            <Hidden smDown>
              <Grid item xs={12} sm={12} container direction="row">
                <Grid item xs={0} sm={6}>
                  <img src={google_play_badge} />
                </Grid>
                <Grid item xs={0} sm={6}>
                  <img src={app_store} />
                </Grid>
              </Grid>
            </Hidden>

            {/* Download Img MOBILE */}
            <Hidden smUp>
              <Grid item xs={12} sm={12} container direction="row">
                <Grid item xs={12} sm={0}>
                  <img
                    src={google_play_badge}
                    className={classes.footerLogoImg}
                  />
                </Grid>
                <Grid item xs={12} sm={0}>
                  <img src={app_store} className={classes.footerLogoImg} />
                </Grid>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={10} direction="row" container spacing={1}>
              <Grid item xs={3}>
                <img src={facebook} className={classes.imgStyle} />
              </Grid>
              <Grid item xs={3}>
                <img src={facebook} className={classes.imgStyle} />
              </Grid>
              <Grid item xs={3}>
                <img src={facebook} className={classes.imgStyle} />
              </Grid>
              <Grid item xs={3}>
                <img src={facebook} className={classes.imgStyle} />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={9}
            sm={7}
            container
            spacing={3}
            className={classes.fontSizeText}
          >
            <Grid item xs={3}>
              <ul>
                <h4>Product</h4>
                <li>Research</li>
                <li>Praclice</li>
                <li>Exam</li>
                <li>Complanice</li>
                <li>Taxmann Bookstore</li>
                <li>Taxmann Blog</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul>
                <h4>Catalogue</h4>
                <li>Research</li>
                <li>Praclice</li>
                <li>Exam</li>
                <li>Complanice</li>
                <li>Taxmann Bookstore</li>
                <li>Taxmann Blog</li>
              </ul>{" "}
            </Grid>
            <Grid item xs={3}>
              <ul>
                <h4>Authors</h4>
                <li>Research</li>
                <li>Praclice</li>
                <li>Exam</li>
                <li>Complanice</li>
                <li>Taxmann Bookstore</li>
                <li>Taxmann Blog</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul>
                <h4>Business & Support</h4>
                <li>Research</li>
                <li>Praclice</li>
                <li>Exam</li>
                <li>Complanice</li>
                <li>Taxmann Bookstore</li>
                <li>Taxmann Blog</li>
              </ul>{" "}
            </Grid>
          </Grid>

          <Hidden smDown>
            <Grid item xs={1}>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
