import React, { useState } from 'react';
import { InputGroup, FormControl, DropdownButton, Dropdown, Table, Button } from 'react-bootstrap';
import { ArrowDownward as ArrowDownwardIcon , ArrowUpward as ArrowUpwardIcon} from '@mui/icons-material';
import styled from '@emotion/styled'; // Import styled from @emotion/styled
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

const StyledSearchBox = styled('div')({
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingLeft: 8,
    width: '30%', // Set the width to make the search bar smaller
    margin: '0 auto', // Center the search bar horizontally
    marginLeft: 0,
    //display: 'flex', // Use flexbox to center the search icon and input
    //alignItems: 'center', // Center the items vertically
  });
  
  
const DataTableBox = () => {
    const [sortDirection, setSortDirection] = useState('asc'); // Default sort direction is ascending ('asc')

    const toggleSortDirection = () => {
      setSortDirection(prevDirection => prevDirection === 'asc' ? 'desc' : 'asc');
    };
  // Dummy data for the table
  const tableData = [
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    { orderId: '1', orderDate: '2024-01-01', orderAmount: '$100', transactionFees: '$5' },
    // Add more data as needed
  ];

  return (
    <div style={styles.box}>
    <InputGroup style={styles.leftright}>
      {/* Search bar */}
      <div style={{ flexGrow: 1 }}>
          <StyledSearchBox>
            <IconButton
              style={{ marginRight: 10 , }}
              color="black"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search..."
              style={{ flex: 1 }} // Make the input grow to fill available space
            />
          </StyledSearchBox>
        </div>
        {/* Sort box and download icon */}
        <div style={styles.actions}>
        <div style={styles.sortDropdown}>
          <Button variant="link" onClick={toggleSortDirection} style={styles.sortButton}>
            Sort {sortDirection === 'asc' ? <ArrowDownwardIcon style={styles.arrowIcon} /> : <ArrowUpwardIcon style={styles.arrowIcon} />}
          </Button>
        </div>
        <Button variant="outline-secondary" style={styles.downloadButton}>Download</Button>
        </div>
    </InputGroup>
      

     

      {/* Table */}
      <Table bordered hover style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.tableHeader}><ArrowDownwardIcon /> OrderId</th>
            <th style={styles.tableHeader}><ArrowDownwardIcon /> OrderDate</th>
            <th style={styles.tableHeader}><ArrowDownwardIcon /> OrderAmount</th>
            <th style={styles.tableHeader}><ArrowDownwardIcon /> TransactionFees</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.orderId}</td>
              <td>{row.orderDate}</td>
              <td>{row.orderAmount}</td>
              <td>{row.transactionFees}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination buttons */}
      <div style={styles.pagination}>
        <Button variant="outline-secondary">Previous</Button>
        <div>
          {/* Numbers in boxes (pagination) */}
          {/* Example: Show numbers 1 to 5 for pagination */}
          {Array.from({ length: 5 }, (_, index) => (
            <Button key={index} variant="outline-secondary" style={styles.pageButton}>{index + 1}</Button>
          ))}
        </div>
        <Button variant="outline-secondary">Next</Button>
      </div>
    </div>
  );
};

const styles = {
    table: {
        width: '100%',
      },
  box: {
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  headerRow:{
    width:'100%'
  },
  tableHeader: {
    backgroundColor: '#f2f2f2', // Grey background color
    width: '25%', // Equal width for each table header
    padding: '15px', // Padding for better spacing
    textAlign: 'center', // Center align text
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sortDropdown: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  downloadButton: {
    marginLeft: '10px',
  },
  arrowIcon: {
    marginLeft: '5px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  pageButton: {
    margin: '0 5px',
  },
  leftright: {
    display:'flex',
    justifyContent: 'flex-start',
    // justifyContent:'end'
  }
};

export default DataTableBox;
