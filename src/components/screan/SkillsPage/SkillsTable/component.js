import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadCustom from 'components/commons/Table/TableHeadCustom/component';
import TableBodyCustom from 'components/commons/Table/TableBodyCustom/component';
import { useStyles } from 'components/screan/UsersPage/UserTable/stylesComponent';


const SkillsTable = props => {
  const classes = useStyles();

  const {
    fetchSkill,
    editSkill,
    skills,
    deleteSkill
  } = props;

  const onClickOpen = (row) => {console.log('open', row)};
  const onClickSave = (values) => {editSkill(values); console.log('save', values)};
  const onClickCancel = (row) => {console.log('cancel', row)};
  const onClickDelete = (id) => {deleteSkill({id: id}); console.log('delete', id)};

  const action = {
    open : onClickOpen,
    save: onClickSave,
    cancel: onClickCancel
  };

  const columns = [
    { id: 'id', label: 'ID', type: 'text' },
    { id: 'name', label: 'Name', type: 'text', isEdit: true },
    { id: 'department', label: 'Department', type: 'text' },
    { id: 'action', label: 'Action', type: 'object', action: action},
    { id: 'delete', label: 'delete', type: 'button', action: onClickDelete},
  ];
  const orderBy = 'id';
  const order = 'desc';


  const onClickSort = (order, orderBy ) => {
    const params = {
      'order' : order,
      'orderBy' : orderBy,
    };
    fetchSkill(params);
  };

  useEffect(() => {
    const params = {
      'order' : order,
      'orderBy' : orderBy,
    };
    fetchSkill(params);
  }, [fetchSkill]);


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
          rows = { skills }
        />
      </Table>
    </Paper>
  );
};

export default SkillsTable;
