import React from 'react';
import EmployeeCard from './EmployeeCard';
import Header from './Header';

const EmployeeDashboard = () => {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' },
    { id: 3, name: 'Alice Johnson', position: 'UX Designer', department: 'Design' },
  ];

  return (
    <div style={styles.dashboard}>
      <Header />
      <div style={styles.cardsContainer}>
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            position={employee.position}
            department={employee.department}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
};

export default EmployeeDashboard;
