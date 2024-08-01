import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const createData = (name, pid, status) => {
  return { name, pid, status };
};

const dummyProcesses = [
  createData('Process 1', 1234, 'Running'),
  createData('Process 2', 5678, 'Stopped'),
  createData('Process 3', 9101, 'Running'),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${TableCell.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${TableCell.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const SystemProcesses = () => {
  const [processes, setProcesses] = useState(dummyProcesses);

  useEffect(() => {
    const interval = setInterval(() => {
      setProcesses(dummyProcesses);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ margin: 2 }}>
      {/* <Typography variant="h6" gutterBottom>
        System Processes
      </Typography> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Process Name</StyledTableCell>
              <StyledTableCell align="right">PID</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processes.map((process) => (
              <StyledTableRow key={process.pid}>
                <StyledTableCell component="th" scope="row">
                  {process.name}
                </StyledTableCell>
                <StyledTableCell align="right">{process.pid}</StyledTableCell>
                <StyledTableCell align="right">{process.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SystemProcesses;
