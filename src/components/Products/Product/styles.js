import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    backgroundColor:"#fff",
  },
  hover: {
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
      transform: 'scale(1.1)',
    opacity: '1',
    }
  },
  CardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  CardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));