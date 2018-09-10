import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const row = (x,i,header) =>
    <TableRow key={i}>
      {
        header.map((y,k) => (
          <TableCell key={k}>{x[y.prop]}</TableCell>
        ))
      }
    </TableRow>;

function SimpleTable({data, header}) {

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {
              header.map((x,i) =>
                <TableCell key={i}>{x.name}</TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x,i)=>row(x,i,header))}
          {/* {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
              </TableRow>
            );
          })} */}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);