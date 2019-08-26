import React, {useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import {useStyles} from "components/commons/Table/TableHeadCustom/stylesComponent";
import TableButtonAction from 'components/commons/Table/TableButtonAction/component';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

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
    // console.log(map);
    return map;
  };

  const classes = useStyles();
  const [values, setValues] = React.useState(getValues());
  const handleChange = name => event => {
    console.log('values', values,'name', name);
    setValues({...values, [name]: event.target.value});
  };

  const [isOpen, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!isOpen);
  };

  const getComponent = (row, column) => {

    console.log(row, column);

    if (column.type === 'object') {
      return <TableButtonAction
        key = {column.id}
        row = {row}
        onClickOpen = {() => {handleOnClick(); column.action.open(row)}}
        onClickSave = {() => {handleOnClick(); column.action.save(values)}}
        onClickCancel = {() => {handleOnClick(); column.action.cancel(row)}}
      />;
    }

    if (column.type === 'link') {
      console.log('link');
      return (
          <Link
              component="button"
              variant="body2"
              onClick={() => {column.action(row.id)}}
          >
            {column.value}
          </Link>)
    }

    if (!column.isEdit) {
      return row[column.id]
    }

    if (isOpen && column.type === 'select') {
      return (
          <Select
              value={values[column.id]}
              onChange={handleChange(column.id)}
              displayEmpty
              name={column.id}
              className={classes.selectEmpty}
          >
            {
              column.data.map((item, key) => (
                <MenuItem key = {key} value={item.id}>{item.title}</MenuItem>
              ))
            }
          </Select>
      )
    }

    if (!isOpen && column.type === 'select') {
      let foundIndex = column.data.findIndex(element => element.id === values[column.id]);
      return column.data[foundIndex].title
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
