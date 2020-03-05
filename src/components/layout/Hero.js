import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import defaultImg from "../../images/etc3.jpeg";

const StyledHero = styled.header`
  min-height: ${props => (props.full ? "100vh" : "60vh")};
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Hero = ({ img, title, subtitle, full }) => {
  const classes = useStyles();
  return (
    <StyledHero img={img} full={full}>
      <section className={classes.wrapper}>
        <h2 className={classes.title}>{title}</h2>
        {subtitle ? (
          <>
            <div className={classes.hr} />
            <h4 className={classes.subtitle}>{subtitle}</h4>
          </>
        ) : (
          ""
        )}
      </section>
    </StyledHero>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  wrapper: {
    padding: "1rem 3rem",
    background: "rgba(250, 250, 250, 0.4)"
  },
  subtitle: {
    ...theme.fonts.title,
    textTransform: "capitalize",
    fontSize: "2rem",
    margin: "1rem auto"
  }
}));

Hero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Hero;
