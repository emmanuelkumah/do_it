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
          <Header />
        </Grid>
        <Grid item>
          <Hero />
        </Grid>
        <Grid item>
          <Features />
        </Grid>
      </Grid>
    </Router>
  );
}

export default TodoBuilder;
