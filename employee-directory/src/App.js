import React from 'react';
import './App.css';
import employee from './employees.json'

class App extends React.Component {
  state = {
    employeeList: employee,
    sortOrder: " "
  }

  handleSort = () => {
    const sortList = this.state.employeeList.sort(function (a, b) {
      return a.payBand - b.payBand;
    });
    this.setState({employeeList: sortList})
  }
  
  render() {
      return(
      <>
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Title</th>
          <th scope="col" onClick={() => this.handleSort()}>Pay Band</th>
        </tr>
      </thead>
      <tbody>
        {this.state.employeeList.map(employee => (
          <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.title}</td>
            <td>{employee.payBand}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </>
    );
  }
}

export default App;
