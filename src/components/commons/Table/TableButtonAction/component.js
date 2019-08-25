import React from 'react';
import { useStyles } from './stylesComponent';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const TableButtonAction = props => {
  const classes = useStyles();
  const {
    row,
    onClickOpen,
    onClickSave,
    onClickCancel,
  } = props;

  const [open, setOpen] = React.useState(false);

  function handleRequestOpen(row) {
    setOpen((open !== true));
    onClickOpen(row);
  }

  function handleRequestCancel(row) {
    setOpen((open !== true));
    onClickCancel();
  }

  function handleRequestSave(row) {
    setOpen((open !== true));
    onClickSave();
  }


  if (open === false) {
    return (
      <Fab
        color="secondary"
        aria-label="edit"
        className={classes.fab}
        onClick={handleRequestOpen.bind(this, row)}
      >
        <Icon>edit_icon</Icon>
      </Fab>
    );
  }

  if (open === true) {
    return (
      <div>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={handleRequestSave.bind(this, row)}
        >
          Save
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={handleRequestCancel.bind(this, row)}
        >
          Cancel
        </Fab>
      </div>
    )
  }
};

export default TableButtonAction;
