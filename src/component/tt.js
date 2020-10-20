import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const itemList=[
    {
      text:'Inbox',
      onClick: ()=> history.push('/'),
      submenu: [
        {
          title: "Employees",
          page: "people/employees"
        },
        {
          title: "Role",
          page: "people/role"
        },
        {
          title: "Designation",
          page: "people/designation"
        },
            ]
    },
    {
      text:'Starred',
      onClick: ()=> history.push('/'),
    },
    {
      text: 'Send email',
      onClick: ()=> history.push('/rahul'),
    },
    {
      text:'Drafts',
      onClick: ()=> history.push('/'),
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const {text, onClick}=item;
            return(
            <ListItem button key={text} onClick={onClick}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          )})}
        </List>
       
        
      </Drawer>
      
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Route , Switch , Link} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Taxman =(props)=> {
  const classes = useStyles();
 

  // const itemList=[
  //   {
  //     text:'Inbox',
  //     onClick: ()=> history.push('/'),
  //     submenu: [
  //       {
  //         title: "Employees",
  //         page: "people/employees"
  //       },
  //       {
  //         title: "Role",
  //         page: "people/role"
  //       },
  //       {
  //         title: "Designation",
  //         page: "people/designation"
  //       },
  //           ]
  //   },
  //   {
  //     text:'Starred',
  //     onClick: ()=> history.push('/'),
  //   },
  //   {
  //     text: 'Send email',
  //     onClick: ()=> history.push('/rahul'),
  //   },
  //   {
  //     text:'Drafts',
  //     onClick: ()=> history.push('/'),
  //   }
  // ];

  return (
    <div className={classes.root}>
      <Route>
       <TreeView
      className={classes.root}
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" ><Link to="/" >lll</Link></TreeItem>
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
    </Route>
    </div>
  );
}

export default Taxman;

