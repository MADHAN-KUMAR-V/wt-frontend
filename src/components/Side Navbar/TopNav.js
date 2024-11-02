import { Navbar, Nav } from 'rsuite';
import React from 'react';


const styles = {
  noHover: {
    backgroundColor: 'transparent',
    cursor: 'default', 
    fontSize: '18px', 
    color: 'black', 
    pointerEvents: 'none', 
  },
  navbar: {
    backgroundColor: 'white',
    borderBottom: '1px solid gray',
  },
  greeting: {
    display: 'flex',
    alignItems: 'center',
  },
};

const TopNav = () => {
  
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning Traders! 👋";
    else if (hours < 18) return "Good Afternoon Traders! 👋";
    else return "Good Evening Traders! 👋";
  };

  const greeting = getGreeting();

  return (
    <Navbar style={styles.navbar}>
      <Nav style={styles.greeting} pullRight>
        <Nav.Item style={styles.noHover}>
          {greeting}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
