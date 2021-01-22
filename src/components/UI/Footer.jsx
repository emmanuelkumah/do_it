import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#191516",
    color: "#fff",
    fontFamily: "Roboto",
  },
}));

//create copyRight info
function Copyright() {
  return (
    <Typography variant='body2' color='primary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Do.This !
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Do.This !
      </Typography>
      <Typography variant='subtitle1' align='center' component='p'>
        Priotizing Your Life The Right Way
      </Typography>
      <Copyright />
    </footer>
  );
}

export default Footer;
