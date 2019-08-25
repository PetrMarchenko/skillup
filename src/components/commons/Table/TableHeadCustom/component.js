import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './stylesComponent';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const TableHeadCustom = props => {
  const classes = useStyles();

  const {
    orderBy,
    order,
    columns,
    onClickSort
  } = props;

  const [orderByParam, setOrderBy] = React.useState( orderBy );
  const [orderParam, setOrder] = React.useState( order );

  function handleRequestSort(id) {
    const isDesc = orderByParam === id && orderParam === 'desc';
    const  order = isDesc ? 'asc' : 'desc';
    setOrder(order);
    setOrderBy(id);

    onClickSort(id, order);
  }

  return (
        <TableHead>
          <TableRow>
            {
              columns.map((row, index) => (
                  <TableCell key = {index} align="left">
                    <TableSortLabel
                      active={orderByParam === row.id }
                      direction={orderParam}
                      onClick={handleRequestSort.bind(this, row.id)}
                    >
                      {row.label}
                      {orderByParam === row.id ? (
                        <span className={classes.visuallyHidden}>
                          {orderParam === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
  );
}

export default TableHeadCustom;
