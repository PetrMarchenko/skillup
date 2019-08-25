import React, {useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import {useStyles} from "components/commons/Table/TableHeadCustom/stylesComponent";
import TableButtonAction from 'components/commons/Table/TableButtonAction/component';

const TableRowCustom = props => {
  const {
    columns,
    row
  } = props;

  const getValues =  () => {
    let map = {};
    columns.map(column => {
      map[column.id] = row[column.id];
    });
    console.log(map);
    return map;
  };

  const classes = useStyles();
  const [values, setValues] = React.useState(getValues());
  const handleChange = name => event => {
    console.log(values);
    setValues({...values, [name]: event.target.value});
  };

  const [isOpen, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!isOpen);
  };

  const getComponent = (row, column) => {
    if (column.type === 'object') {
      return <TableButtonAction
        row = {row}
        onClickOpen = {() => {handleOnClick(); column.action.open(row)}}
        onClickSave = {() => {handleOnClick(); column.action.save(values)}}
        onClickCancel = {() => {handleOnClick(); column.action.cancel(row)}}
      />;
    }

    if (!column.isEdit) {
      return row[column.id]
    }

    if (isOpen && column.type === 'text') {
      return (
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={values[column.id]}
          onChange={handleChange(column.id)}
          margin="normal"
        />
      );
    }

    return row[column.id]
  };

  return (
    <TableRow key={row.id}>
      {
        columns.map(column => (
          <TableCell key={column.id} align="left"> {getComponent(row, column)}</TableCell>
        ))
      }
    </TableRow>
  );

};

export default TableRowCustom;
