import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:'#d3d3d3',// theme.palette.background.default ,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));