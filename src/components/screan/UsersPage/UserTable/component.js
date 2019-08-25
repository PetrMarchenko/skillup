import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadCustom from 'components/commons/Table/TableHeadCustom/component';
import TableBodyCustom from 'components/commons/Table/TableBodyCustom/component';
import { useStyles } from 'components/screan/UsersPage/UserTable/stylesComponent';

const UserTable = props => {
  const classes = useStyles();

  const {
    fetchUser,
    editUser,
    users,
  } = props;

  const onClickOpen = (row) => {console.log('open', row)};
  const onClickSave = (values) => {editUser(values); console.log('save', values)};
  const onClickCancel = (row) => {console.log('cancel', row)};

  const action = {
    open : onClickOpen,
    save: onClickSave,
    cancel: onClickCancel
  };
  const columns = [
    { id: 'id', label: 'ID', type: 'text' },
    { id: 'name', label: 'Name', type: 'text', isEdit: true },
    { id: 'age', label: 'Age', type: 'text', isEdit: true },
    { id: 'role', label: 'User role', type: 'text' },
    // { id: 'position', label: 'Position', type: 'text' },
    { id: 'action', label: 'Action', type: 'object', action: action},
  ];
  const orderBy = 'id';
  const order = 'desc';


  const onClickSort = (order, orderBy ) => {
    const params = {
      'order' : order,
      'orderBy' : orderBy,
    };
    fetchUser(params);
  };

  useEffect(() => {
    const params = {
      'order' : order,
      'orderBy' : orderBy,
    };
    fetchUser(params);
  }, [fetchUser]);


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>

        <TableHeadCustom
          orderBy = {orderBy}
          order = {order}
          columns = {columns}
          onClickSort = {(order, orderBy)=> (onClickSort(order, orderBy))}
        />

        <TableBodyCustom
          columns = { columns }
          rows = { users }
        />
      </Table>
    </Paper>
  );
};

export default UserTable;
