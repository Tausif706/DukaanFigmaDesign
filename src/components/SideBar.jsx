import React from 'react';
import { IconButton } from '@mui/material';
import { Home as HomeIcon, ArrowDropDown as ArrowDownIcon } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
    <div style={styles.content}>
      {/* Logo with name and arrow */}
      <div style={styles.logoContainer}>
        <span style={styles.logoText}>Logo Name</span>
        <IconButton style={styles.arrowIcon}>
          <ArrowDownIcon />
        </IconButton>
      </div>
        {/* Menu items */}
        <div style={styles.menu}>
        <ul style={styles.menuList}>
        <li style={styles.menuItem}>
            <IconButton style={styles.menuIcon}>
            <HomeIcon style={styles.iconIcon} />
            <span style={styles.menuIcon}>Home</span>
            </IconButton>
            
        </li>
        <li style={styles.menuItem}>
            <IconButton style={styles.menuIcon}>
            <HomeIcon style={styles.iconIcon} />
            <span style={styles.menuIcon}>Home</span>
            </IconButton>
            
        </li>
        <li style={styles.menuItem}>
            <IconButton style={styles.menuIcon}>
            <HomeIcon style={styles.iconIcon} />
            <span style={styles.menuIcon}>Home</span>
            </IconButton>
            
        </li>
        <li style={styles.menuItem}>
            <IconButton style={styles.menuIcon}>
            <HomeIcon style={styles.iconIcon} />
            <span style={styles.menuIcon}>Home</span>
            </IconButton>
            
        </li>
        <li style={styles.menuItem}>
            <IconButton style={styles.menuIcon}>
            <HomeIcon style={styles.iconIcon} />
            <span style={styles.menuIcon}>Home</span>
            </IconButton>
            
        </li>
        <li style={styles.menuItem}>
            <IconButton style={styles.menuIcon}>
            <HomeIcon style={styles.iconIcon} />
            <span style={styles.menuIcon}>Home</span>
            </IconButton>
            
        </li>
        {/* Add more menu items as needed */}
        </ul>
        </div>
    </div>

    {/* Button */}
    <div style={styles.buttonContainer}>
      <button style={styles.button}>
        <div>
            <HomeIcon style={styles.iconIcon}/>
        </div>
        <div style={styles.topBottom}>
            <div>Available Credits</div>
            <div>222.23</div>
        </div>
      </button>
    </div>
  </div>
  );
};

const styles = {
    sidebar: {
        display: 'flex', // Use flexbox layout
        flexDirection: 'column', // Stack child elements vertically
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: 250,
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px',
        boxSizing: 'border-box',
      },
      content: {
        flexGrow: 1, // Allow the content to grow and fill the available space
      },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  menu: {
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    display: 'flex',
    justifyContent:'left',
    // alignItems: 'center',
    marginBottom: '0px',
    transition: 'background-color 0.5s', // Add transition for smooth hover effect
    '&:hover': {
      backgroundColor: '#555', // Change background color on hover
    },
  },
  menuIcon: {
    // marginRight: '10px',
    width:'100%',
    border: '#000',
    borderRadius: '2px',
    color: '#fff', // Set default color for the icon
  },
  iconIcon: {
    // marginRight: '10px',
    // width:'100%',
    fill:'none',
    border: '#000',
    borderColor:'#fff',
    stroke:'#fff',
    strokeWidth:"2",
    strokeLinecap:"round",
    strokeLinejoin:"round",
    fontSize:'18px',
    // borderRadius: 1,
    color: '#fff', // Set default color for the icon
  },
  topBottom:{
    marginLeft:'5px',
    display: 'flex',
    flexDirection: 'column',
  },
  menuText: {
    color: '#fff', // Set default color for the text
    fontSize:'18px',
  },
  buttonContainer: {
    // marginTop: 'auto',
    display:'flex',
    justifyContent:'centre',
    alignItems:'centre',
  },
  button: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    width: '100%',
    padding: '10px',
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Sidebar;


