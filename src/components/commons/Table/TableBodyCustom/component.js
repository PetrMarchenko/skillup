import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRowCustom from 'components/commons/Table/TableRowCustom/component';

const TableBodyCustom = props => {

  const {
    columns,
    rows,
  } = props;

  return (
      <TableBody>
        {rows.map(row => (
            <TableRowCustom
                key = {row.id}
                row={row}
                columns={columns}
            />
        ))}
      </TableBody>
  );
};

export default TableBodyCustom;
