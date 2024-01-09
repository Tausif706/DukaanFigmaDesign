import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import styled from '@emotion/styled'; // Import styled from @emotion/styled

// Create styled components using the styled utility
const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
});

const StyledSearchBox = styled('div')({
  backgroundColor: '#f0f0f0',
  borderRadius: 4,
  paddingLeft: 8,
  width: '50%', // Set the width to make the search bar smaller
  margin: '0 auto', // Center the search bar horizontally
  display: 'flex', // Use flexbox to center the search icon and input
  alignItems: 'center', // Center the items vertically
});

const Navbar = () => {
  const handleLeftClick = () => {
    console.log('Left button clicked');
  };

  const handleRightClick = () => {
    console.log('Right button clicked');
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        {/* Left button */}
        <div>
        <IconButton
          edge="start"
          color="black"
          aria-label="Payments"
          onClick={handleLeftClick}
        >
          Payments
        </IconButton>
        <IconButton
          edge="start"
          color="black"
          aria-label="Payments"
          onClick={handleLeftClick}
        >
          Payments
        </IconButton>
        </div>
        {/* Center search box */}
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

        {/* Right buttons */}
        <div>
          <IconButton
            color="black"
            onClick={handleRightClick}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            color="black"
            onClick={handleRightClick}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
