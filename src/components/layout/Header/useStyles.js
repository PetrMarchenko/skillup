import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  icon     : {
    marginRight: theme.spacing(2),
  },
  root     : {
    width             : 250,
    'background-color': '#3f51b5 !important;'
  },
  colorIcon: {
    color: '#fff !important;'
  },
  margin   : {
    margin: 8,
  },
}));