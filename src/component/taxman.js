import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeItem from "@material-ui/lab/TreeItem";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Route, Link } from "react-router-dom";
import { Divider, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Switch from "@material-ui/core/Switch";
import { useN01SwitchStyles } from '@mui-treasury/styles/switch/n01';
const useStyles = makeStyles((theme) => ({
  tree: {
    [theme.breakpoints.down("sm")]: {
    //   height: "250px",
    //  // width: "250px",
    //   backgroundColor: "red",
       marginRight: "400px"
    },
    //width: "250px",
  },
  root: {
    width: "100%",
    height: "100%",
    padding: 1,
  },
  switchBase: {
    padding: 11,
    color: '#ff6a00',
  },
  thumb: {
    width: 26,
    height: 26,
    backgroundColor: '#fff',
  },
  track: {
    background: 'linear-gradient(to right, #ee0979, #ff6a00)',
    opacity: '1 !important',
    borderRadius: 20,
    position: 'relative',
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      width: '50%',
      transform: 'translateY(-50%)',
      color: '#fff',
      textAlign: 'center',
    },
    '&:before': {
      content: '"on"',
      left: 4,
      opacity: 0,
    },
    '&:after': {
      content: '"off"',
      right: 4,
    },
  },
  checked: {
    '&$switchBase': {
      color: '#185a9d',
      transform: 'translateX(32px)',
      '&:hover': {
        backgroundColor: 'rgba(24,90,257,0.08)',
      },
    },
    '& $thumb': {
      backgroundColor: '#fff',
    },
    '& + $track': {
      background: 'linear-gradient(to right, #43cea2, #185a9d)',
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 0,
      }
    },
  },

}));

const Taxman = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const switchStyles = useN01SwitchStyles();
  const [hideBtn, setHideBtn] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const hideMenu = (event) => {
    console.log("button click");

    if (hideBtn == true) {
      setHideBtn(false);
      setState({ ...state, [event.target.name]: event.target.checked });
    } else {
      setHideBtn(true);
      setState({ ...state, [event.target.name]: event.target.checked });
    }
  };

  return (
    <div className={classes.tree} style={{ position: "relative" }}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Switch
            checked={state.checkedA}
            classes={switchStyles}
            onChange={hideMenu}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Grid>
        <br />
        <Grid item xs={3}>
          {hideBtn ? null : (
            <Grid id="menu">
              <TreeView
                className={classes.root}
                defaultCollapseIcon={<RemoveIcon />}
                defaultExpandIcon={<AddIcon />}
              >
                <Link to="/">
                 <TreeItem nodeId="0" label="Home" />
                 </Link>
                 <Divider />
                <TreeItem nodeId="1" label="Books">
                <Divider />
                  <Link to="/application/Laws">
                    <TreeItem nodeId="2" label="Laws" />
                  </Link>
                  <Link to="/application/Gst">
                    <TreeItem nodeId="3" label="GST" />
                  </Link>

                  <TreeItem nodeId="4" label="BareActs" />
                  <Divider />
                </TreeItem>
                <TreeItem nodeId="5" label="Journals">
                  <TreeItem nodeId="10" label="OSS" />
                  <TreeItem nodeId="6" label="Material">
                    <TreeItem nodeId="7" label="src">
                      <TreeItem nodeId="8" label="index" />
                      <TreeItem nodeId="9" label="tree" />
                    </TreeItem>
                   
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId="11" label="Catalogue">
                <TreeItem nodeId="8" label="index" />
                      <TreeItem nodeId="9" label="tree" />
                </TreeItem>
              </TreeView>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Taxman;
