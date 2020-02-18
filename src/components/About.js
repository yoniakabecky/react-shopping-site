import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SmileIcon from "@material-ui/icons/Mood";
import HandIcon from "@material-ui/icons/PanTool";
import BagIcon from "@material-ui/icons/LocalMall";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        about
      </Typography>
      <hr className={classes.hr} />

      <div className={classes.sectionWrapper}>
        <div className={classes.contentsWrapper}>
          <SmileIcon color="secondary" fontSize="large" />
          <Typography variant="h5" className={classes.contentsTitle}>
            maker
          </Typography>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            doloribus aperiam, et vel nam enim quam saepe sint eum ab.
          </p>
        </div>
        <div className={classes.contentsWrapper}>
          <HandIcon color="primary" fontSize="large" />
          <Typography variant="h5" className={classes.contentsTitle}>
            all handmade
          </Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            numquam?
          </p>
        </div>
        <div className={classes.contentsWrapper}>
          <BagIcon color="error" fontSize="large" />
          <Typography variant="h5" className={classes.contentsTitle}>
            inspiration
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem
            laudantium libero? Voluptas accusamus eligendi nostrum obcaecati
            vero corporis dolorum. Corporis quo architecto nulla eum nisi?
            Aspernatur, sequi. Dicta, eos?
          </p>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  title: {
    ...theme.global.title,
    textAlign: "center",
    margin: "2rem auto 0 auto"
  },
  sectionWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  contentsWrapper: {
    width: "30vw",
    minWidth: "20rem",
    textAlign: "center",
    marginTop: "1.5rem",
    padding: "0.5rem"
  },
  contentsTitle: {
    textTransform: "uppercase",
    marginTop: "1rem"
  }
}));

export default About;
