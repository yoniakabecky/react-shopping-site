import React from "react";
import SectionTitle from "./SectionTitle";

import { makeStyles } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import Typography from "@material-ui/core/Typography";
import SmileIcon from "@material-ui/icons/Mood";
import HandIcon from "@material-ui/icons/PanTool";
import BagIcon from "@material-ui/icons/LocalMall";

const contents = [
  {
    icon: <SmileIcon color="secondary" fontSize="large" />,
    title: "maker",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi doloribus aperiam, et vel nam enim quam saepe sint eum ab."
  },
  {
    icon: <HandIcon color="primary" fontSize="large" />,
    title: "all handmade",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, numquam?"
  },
  {
    icon: <BagIcon color="error" fontSize="large" />,
    title: "inspiration",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem laudantium libero? Voluptas accusamus eligendi nostrum obcaecati vero corporis dolorum. Corporis quo architecto nulla eum nisi? Aspernatur, sequi. Dicta, eos?"
  }
];

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundColor}>
      <div className={classes.container}>
        <SectionTitle title="about" />

        <div className={classes.sectionBody}>
          {contents.map((content, index) => (
            <div className={classes.contentsWrapper} key={index}>
              {content.icon}
              <Typography variant="h5" className={classes.contentsTitle}>
                {content.title}
              </Typography>
              <p>{content.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  backgroundColor: {
    background: orange[50],
    padding: "0.5rem 0"
  },
  contentsWrapper: {
    maxWidth: "20rem",
    textAlign: "center",
    margin: "1rem auto 2rem auto"
  },
  contentsTitle: {
    textTransform: "uppercase"
  }
}));

export default About;
