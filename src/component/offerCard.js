import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  offerCard: {
    [theme.breakpoints.down("sm")]: {
       
      height: "250px",
      width: "250px",
      position: "relative",
     
    }
  },
ListR: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },

    fontSize: "13px",
  },
}));
const OfferCard =(props)=> {
  const classes = useStyles();

  return (
      
    <Card className={classes.offerCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.CardData.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className={classes.ListR} component="h2">
          {props.CardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.ListR} component="p">
          {props.CardData.note}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.ListR} color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
  );
}
export default  OfferCard;