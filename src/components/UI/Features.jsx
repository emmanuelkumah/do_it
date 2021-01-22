import React from "react";
import Grid from "@material-ui/core/Grid";
import FeatureImg from "../../static/images/FeaturePic.png";
import FeatureImg_2 from "../../static/images/featureImage2.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "3rem",
    padding: "80px 10px 10px 50px",
  },
  subTitle: {
    fontFamily: "Roboto",
    fontWeight: 200,
    fontSize: "1.5rem",
    padding: "20px 20px 10px 50px",
   
  },
  featureSec_2: {
    backgroundColor: "#EEE5E9",
  },
  img1: {
    marginTop: "60px",
    padding: "20px 20px 10px 50px",
  },
}));

function Features() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid container className={classes.featureSection}>
        <Grid item container>
            <Grid item sm={6}>
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
            <Grid item sm={6}>
              <img src={FeatureImg} className={classes.img1} alt='feature-img' />
            </Grid>
        </Grid>
        <Grid item container className={classes.featureSec_2}>
        <Grid item sm={6}>
            <img
              src={FeatureImg_2}
              className={classes.img1}
              alt='feature-img'
            />
          </Grid>
          <Grid item  sm={6}>
            <Typography variant='h2' gutterBottom className={classes.heading}>
              Focus your energy on the right things
            </Typography>
            <Typography
              variant='subtitle1'
              gutterBottom
              className={classes.subTitle}
            >
              Easily organize and prioritize your tasks and projects so you’ll
              always know exactly what to work on next.
            </Typography>
          </Grid>
         
        </Grid>
      </Grid>
    </section>
  );
}

export default Features;
