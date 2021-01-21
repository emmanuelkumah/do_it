import React from 'react'
// import styles from "../../App.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import heroImage from "../images/HeroImage.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root: {
      width: '100%',
      backgroundColor:"#EEF5DB",
      display:"flex"
    },
   heading:{
       fontFamily:'Montserrat',
       fontWeight: 600,
       fontSize:"5rem",
       marginTop:"80px",
       padding:"10px 30px",
       marginLeft:"60px"
   },
   subHeading: {
       fontFamily:'Hachi Maru Pop', 
       fontSize:"1.5rem",
       padding:"10px 30px",
    //    marginTop:"80px",
       marginLeft:"60px"

   }
  }));



function Hero() {
    const classes = useStyles();
    return (
        <section className={classes.root}>

            <Grid container>
            <Grid item md={6}>
               <Typography variant="h2" className={classes.heading}>
                  Organize your life , your way
                </Typography>
                <Typography variant="subtitle1" className={classes.subHeading} gutterBottom component="div">
                    Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list
                 </Typography>
               </Grid>
               <Grid item md={6}>
                   <img src={heroImage} alt="hero-unit"/>
               </Grid>
              
            </Grid>
        </section>
    )
}

export default Hero
