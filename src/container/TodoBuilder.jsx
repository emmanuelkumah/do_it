import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Features from "../components/UI/Features";
import Footer from "../components/UI/Footer"

function TodoBuilder() {
  return (
    <Router>
      {/* <Grid container direction='column'>
        <Grid item container>
          <Header />
        </Grid>
        <Grid item>
          <Hero />
        </Grid>
        <Grid item>
          <Features />
        </Grid>
      </Grid> */}
      <div>
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </Router>
  );
}

export default TodoBuilder;
