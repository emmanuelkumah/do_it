import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Features from "../components/UI/Features";

function TodoBuilder() {
  return (
    <Router>
      <Grid container direction='column'>
        <Grid item container>
          {" "}
          <Header />
        </Grid>
        <Grid item container xs={12}>
          <Hero />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10}>
            <Features />
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
    </Router>
  );
}

export default TodoBuilder;
