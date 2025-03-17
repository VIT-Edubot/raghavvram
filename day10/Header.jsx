import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Employee Management System</h1>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    margin: '16px 0',
  },
};

export default Header;
