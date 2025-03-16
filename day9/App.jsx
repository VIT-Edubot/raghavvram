import './App.css';
import Header from './header.jsx'; // Adjust to follow React naming conventions
import Employee from './EmployeeDashboard.jsx'; // Typo fixed: Employe -> Employee

function App() {
  return (
    <div>
      <Header />
      <Employee name={"RAM"} pos={"Senior Manager"} dept={"Human Resources"}/><br />
      <Employee name={"Anush"} pos={"Lead Designer"} dept={"Software Development"}/><br />
	  <Employee name={"Gupta"} pos={"Lead Analyst"} dept={"Software"}/><br />
    </div>
  );
}

export default App;

