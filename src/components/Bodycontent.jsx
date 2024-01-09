// BodyContent.jsx

import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import DataTableBox from './DataTableBox';
const BodyContent = () => {
  return (
    <div style={styles.bodyContent}>
      {/* First line */}
      <div style={styles.firstLine}>
        <span >Overview</span>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button  v">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      
      {/* Second line */}
      <div style={styles.secondLine}>
        <div style={styles.box}>
          <span >Online Orders</span>
          <h2>231</h2>
        </div>
        <div style={styles.box}>
          <span>Amount Received</span>
          <h2>~12000</h2>
        </div>
      </div>

      {/* Next line */}
      <div style={styles.nextLine}>
        <span style={styles.boldText}>Transactions | This Month</span>
      </div>
      <DataTableBox />
    </div>
  );
};

const styles = {
  bodyContent: {
    padding: '20px',
  },
  firstLine: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  secondLine: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  box: {
    width: 'calc(50% - 10px)', // 50% width with spacing between boxes
    display:'flex',
    flexDirection:'column',
    padding: '10px',
    margin:'10px',
    borderRadius:'4px',
    // border: '0.2px solid #000',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  nextLine: {},
  boldText: {
    fontWeight: '540',
    fontSize:'20px'
  },
  // dropdownMenu: {
  //   display: 'block',
  //   position: 'static',
  //   float: 'none',
  //   width: 'auto',
  //   marginTop: '0',
  //   border: '0',
  //   boxShadow: 'none',
  //   textAlign: 'left',
  // },
  
  // dropdownItem: {
  //   display: 'block',
  //   width: '100%',
  //   padding: '0.5rem 1rem',
  //   clear: 'both',
  //   fontWeight: '400',
  //   color: '#212529',
  //   textAlign: 'inherit',
  //   whiteSpace: 'nowrap',
  //   backgroundColor: 'transparent',
  //   border: '0',
  // },
  
  // dropdownItemFocus: {
  //   color: '#007bff',
  //   textDecoration: 'none',
  //   backgroundColor: '#f8f9fa',
  // },
  
  // dropdownItemHover: {
  //   color: '#007bff',
  //   textDecoration: 'none',
  //   backgroundColor: '#f8f9fa',
  // },
};

export default BodyContent;
