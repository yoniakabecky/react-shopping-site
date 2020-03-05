import React from "react";
import SectionTitle from "../layout/SectionTitle";
import { Link } from "react-router-dom";
import { withWorkshopConsumer } from "../../context/WorkshopContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const MakeYourOwn = ({ context }) => {
  const classes = useStyles();
  const { workshops, availableWorkshops, loading } = context;

  return (
    <article className={classes.container}>
      <SectionTitle title="Make Your Own" />
      <p className={classes.alignCenter}>
        Do you want to make your own Macramé? Try our courses!!
      </p>
      <section className={classes.sectionBody}>
        {loading ? (
          <CircularProgress color="secondary" size="4rem" />
        ) : (
          workshops.map(item => (
            <Card key={item.id} className={classes.card}>
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.level}
                >
                  {item.level}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.name}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  // to={`/workshops/workshop${item.id}`}
                  to="/workshops"
                  className={classes.link}
                >
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          ))
        )}
      </section>
    </article>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  card: {
    maxWidth: "18rem",
    minWidth: "15rem",
    margin: "1rem",
    background: theme.palette.secondary.light
  },
  level: {
    textTransform: "uppercase",
    color: theme.palette.text.secondary
  },
  name: {
    margin: "0.5rem auto",
    textTransform: "capitalize"
  }
}));

export default withWorkshopConsumer(MakeYourOwn);
