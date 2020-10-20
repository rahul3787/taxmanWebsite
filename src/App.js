import React from "react";
import Taxman from "./component/taxman";
import Home from "./component/home";
import Offer from "./component/offer";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Laws from "./component/Laws";
import GST from "./component/Gst";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  hide: {
    maxwidth: 0,
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={4} sm={3} wrap="wrap">
          <Taxman />
        </Grid>

        <Grid item xs={8} sm={6}>
          <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/application/Laws" component={Laws} />

            <Route path="/application/Gst" component={GST} />
          </Switch>
        </Grid>
        <Grid item xs={3}>
          <Offer />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>

      
    </div>
  );
}

export default App;
