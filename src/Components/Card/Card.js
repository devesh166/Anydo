import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
const cardWidth = 500;
const useStyles = makeStyles(theme => ({
  card: {
    // minWidth: 100,
    // width: `calc(100% - ${cardWidth}px)`
    width: cardWidth,
    height: 700
    // marginTop: 0
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    // marginBottom: 12
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  console.log(props.Task);
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h5">
                <b>Today</b>
              </Typography>
            }
          />
        </ListItem>
        {props.Task[0].map((val, index) => {
          return (
            <ListItem button>
              <ListItemText inset primary={val} />
            </ListItem>
          );
        })}
      </List>

      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h5">
                <b>Tommorow</b>
              </Typography>
            }
          />
        </ListItem>
        {props.Task[1].map((val, index) => {
          return (
            <ListItem button>
              <ListItemText inset primary={val} />
            </ListItem>
          );
        })}
      </List>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h5">
                <b>Upcoming</b>
              </Typography>
            }
          />
        </ListItem>
        {props.Task[2].map((val, index) => {
          return (
            <ListItem button>
              <ListItemText inset primary={val} />
            </ListItem>
          );
        })}
      </List>
      {/* <div>
        <h2>Today</h2>
        <ul>
          {props.Task[0].map((val, index) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>Tommorow</h2>
        <ul>
          {props.Task[1].map((val, index) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>Upcoming</h2>
        <ul>
          {props.Task[2].map((val, index) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div> */}
      {/* <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
