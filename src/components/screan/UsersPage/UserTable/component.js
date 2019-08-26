import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadCustom from 'components/commons/Table/TableHeadCustom/component';
import TableBodyCustom from 'components/commons/Table/TableBodyCustom/component';
import { useStyles } from 'components/screan/UsersPage/UserTable/stylesComponent';

import history from 'src/history';

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

  const onEdit = (id) => {history.push('/user/' + id)};

  const action = {
    open : onClickOpen,
    save: onClickSave,
    cancel: onClickCancel
  };

  const dataGradation = [
    {id : 1, title : 'Junior'},
    {id : 2, title : 'Middle'},
    {id : 3, title : 'Senior'},
   ];


  const columns = [
    { id: 'id', label: 'ID', type: 'text' },
    { id: 'name', label: 'Name', type: 'text', isEdit: true },
    { id: 'department', label: 'Department', type: 'text' },
    { id: 'gradation', label: 'Gradation', type: 'select', data: dataGradation, isEdit: true },
    { id: 'edit', label: 'Link', type: 'link', value: 'Set skill', action: onEdit },
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
