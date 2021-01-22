import React from "react";
// import styles from "../../App.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import Button from "@material-ui/core/Button";
import image from "../images/BannerImg.png"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#EEF5DB",
    
  },
  heading: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "5rem",
    marginTop: "100px",
    padding: "10px 40px",
    
  },
  subHeading: {
    fontFamily: "Hachi Maru Pop",
    fontSize: "1.5rem",
    padding: "10px 40px",
    
  },
  heroImg: {
    marginTop: "100px",
    padding: "10px 30px",
    // padding: "10px 30px",
  },
  button: {
    padding: "10px 30px",
    marginTop: "20px",
    marginLeft: "40px",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6}>
          <Typography variant='h2' className={classes.heading}>
            Organize your life , your way
          </Typography>
          <Typography
            variant='subtitle1'
            className={classes.subHeading}
            gutterBottom
            component='div'
          >
            Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list. Just Do it !
          </Typography>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.button}
            endIcon={<SendRoundedIcon />}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item md={6}>
           
          <img className={classes.heroImg} src={image} alt="Hero" />
        
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
