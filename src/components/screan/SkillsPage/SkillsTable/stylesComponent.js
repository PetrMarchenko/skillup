import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    }
  }),
);
