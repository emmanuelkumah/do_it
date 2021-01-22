import React from "react";
import Grid from "@material-ui/core/Grid";
import FeatureImg from "../images/FeaturePic.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
//   featureSection: {
//     // display: "flex",
//     // justifyContent:"center"
//   },
//   grid1: {
//     marginRight: "40px",
//   },
//   grid2: {
//     padding: "10px 20px",
//   },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "3rem",
    // margin: "20px 50px 5px ",
    padding: "80px 10px 10px 50px",
  },
  subTitle: {
    fontFamily: "Roboto",
    fontWeight: 200,
    fontSize: "1.5rem",
    padding: "20px 20px 10px 50px",
    // marginLeft: "50px",
  },
  img1: {
    marginTop: "60px",
    padding: "20px 20px 10px 50px",

  },
}));

function Features() {
  const classes = useStyles();
  return (
    <section  className={classes.root}>
      <Grid container className={classes.featureSection}>
        
        <Grid item md={6}>
          <Typography variant='h2' gutterBottom className={classes.heading}>
            Do It Your Way
          </Typography>
          <Typography
            variant='subtitle1'
            gutterBottom
            className={classes.subTitle}
          >
            Start each day feeling calm and in control. Place priority on the
            things you need to do, track it and mark it as complete when you
            succeed. Our app is not just another todo app, it give you the super
            powers to get a cleasr overview of everything on your plate and
            never lose track of an important task.
          </Typography>
        </Grid>
        <Grid item md={6}>
        
          <img src={FeatureImg} className={classes.img1} alt='feature-img' />
        </Grid>
        <Grid item md={6}>
        
          <img src={FeatureImg} className={classes.img1} alt='feature-img' />
        </Grid>
        <Grid item md={6}>
          <Typography variant='h2' gutterBottom className={classes.heading}>
            Do It Your Way
          </Typography>
          <Typography
            variant='subtitle1'
            gutterBottom
            className={classes.subTitle}
          >
            Start each day feeling calm and in control. Place priority on the
            things you need to do, track it and mark it as complete when you
            succeed. Our app is not just another todo app, it give you the super
            powers to get a cleasr overview of everything on your plate and
            never lose track of an important task.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Features;
