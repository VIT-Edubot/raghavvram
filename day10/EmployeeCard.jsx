import React from 'react';

const EmployeeCard = ({ name, position, department }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '8px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default EmployeeCard;
