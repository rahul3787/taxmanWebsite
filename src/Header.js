import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBar from "material-ui-search-bar";
import Avatar from "@material-ui/core/Avatar";
import ButtonMUI from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
// img
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NameLogo from "./Assets/name_log.svg";
import Cart from "./Assets/Cart.svg";
import Notification from "./Assets/Notification.svg";
import Profile from "./Assets/Profile.svg";
import Reserach from "./Assets/Reserach.svg";
import { Hidden } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  headerImg: {
    [theme.breakpoints.down("sm")]: {
      width: "110px",
    },
  },
}));
function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [secondMenu, setSecondMenu] = useState(false);

  const ArrowDown = () => {
    console.log("yes");
    if (secondMenu == false) {
      setSecondMenu(true);
    } else {
      setSecondMenu(false);
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid xs={12} container alignItems="center">
        {/* GAP */}
        <Grid item xs={1} />

        {/* LOGO */}
        <Grid item xs={1}>
          <img src={NameLogo} className={classes.headerImg} />
          <p style={{ marginTop: "0px" }}>Bookstore</p>
        </Grid>

        <Hidden smUp>
          <Grid item xs={5} />
        </Hidden>

        <Hidden smUp>
          <Grid
            item
            xs={5}
            sm={3}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8} container spacing={2}>
              <Avatar
                style={{
                  backgroundColor: "orange",
                  height: "30px",
                  width: "30px",
                  fontSize: "14px",
                }}
              >
                S
              </Avatar>

              <Avatar
                style={{
                  backgroundColor: "green",
                  height: "30px",
                  width: "30px",
                  fontSize: "14px",
                }}
              >
                R
              </Avatar>

              <Avatar
                style={{
                  backgroundColor: "Blue",
                  height: "30px",
                  width: "30px",
                  fontSize: "14px",
                }}
              >
                k
              </Avatar>
            </Grid>

            <Grid item xs={1} />

            <Grid item xs={3}>
              <KeyboardArrowDownIcon onClick={ArrowDown} />
            </Grid>
          </Grid>
        </Hidden>

        <Hidden smUp>
          {secondMenu ? (
            <Grid
              item
              xs={12}
              id="seconMenu"
              container
              spacing={3}
              style={{ paddingBottom: "10px" }}
            >
              <Grid item sm={5} alignContent="center">
                <ButtonMUI
                  variant="contained"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "orange",
                    color: "#fff",
                    width: "90px",
                    fontSize: "11px",
                  }}
                >
                  Bookstore
                </ButtonMUI>
              </Grid>

              <Grid item sm={1} style={{ marginTop: "10px" }}>
                <img src={Reserach} />
              </Grid>
              <Grid item sm={1} style={{ marginTop: "10px" }}>
                <img src={Notification} />
              </Grid>
              <Grid item sm={1} style={{ marginTop: "10px" }}>
                <img src={Profile} />
              </Grid>
              <Grid item sm={1} style={{ marginTop: "10px" }}>
                <img src={Cart} />
              </Grid>
              <Grid item sm={1}>
              <IconButton
                aria-label="delete"
                onClick={handleClick}
                className={classes.margin}
                size="small"
              >
                <MenuIcon
                  style={{
                    backgroundColor: "orange",
                    color: "#fff",
                    borderRadius: "50px",
                    height: "30px",
                    width: "30px",
                  }}
                />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            </Grid>
            
          ) : null}
        </Hidden>

        {/* Search */}
        <Grid item xs={1} />
        <Grid item xs={10} sm={4}>
          <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              borderRadius: "50px",
              backgroundColor: "#f4f3f3",
              boxShadow: "0 0 0",
            }}
          />
        </Grid>

        {/* AVATAR PC */}
        <Hidden xsDown>
          <Grid item sm={1} container justify="center" alignItems="center">
            <Avatar
              style={{
                backgroundColor: "orange",
                height: "30px",
                width: "30px",
                fontSize: "14px",
              }}
            >
              S
            </Avatar>
            <Avatar
              style={{
                backgroundColor: "green",
                height: "30px",
                width: "30px",
                fontSize: "14px",
              }}
            >
              R
            </Avatar>
            <Avatar
              style={{
                backgroundColor: "purple",
                height: "30px",
                width: "30px",
                fontSize: "14px",
              }}
            >
              K
            </Avatar>
          </Grid>
        </Hidden>

        {/* PC MENU */}
        <Hidden xsDown>
          <Grid item sm={3} container spacing={3} alignItems="center">
            <Grid item sm={5}>
              <ButtonMUI
                variant="contained"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "orange",
                  color: "#fff",
                }}
              >
                Bookstore
              </ButtonMUI>
            </Grid>
            <Grid item sm={1}>
              <img src={Reserach} />
            </Grid>
            <Grid item sm={1}>
              <img src={Notification} />
            </Grid>
            <Grid item sm={1}>
              <img src={Profile} />
            </Grid>
            <Grid item sm={1}>
              <img src={Cart} />
            </Grid>
            <Grid item sm={1}></Grid>
            <Grid item sm={1}>
              <IconButton
                aria-label="delete"
                onClick={handleClick}
                className={classes.margin}
                size="small"
              >
                <MenuIcon
                  style={{
                    backgroundColor: "orange",
                    color: "#fff",
                    borderRadius: "50px",
                    height: "30px",
                    width: "30px",
                  }}
                />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
export default Header;
