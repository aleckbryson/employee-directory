import React from 'react';
import './App.css';
import employee from './employees.json'

class App extends React.Component {
  state = {
    employeeList: employee,
    sortOrder: " "
  }

  handleSort = () => {
    const sortList = this.state.employeeList.sort((a, b) => {
      if (this.state.sortOrder !== "des") {
        return a.payBand - b.payBand;
      } else {
        return b.payBand - a.payBand;
      }
    });
    const newSort = this.state.sortOrder === "des" ? "asc" : "des"
    this.setState({ employeeList: sortList, sortOrder: newSort })
  }

  // handleSortId = () => {
  //   const sortId = this.state.employeeList.sort((a, b) => {
  //     if (this.state.sortOrder !== "des") {
  //       return a.id - b.id;
  //     } else {
  //       return b.id - a.id;
  //     }
  //   });
  //   const newSortId = this.state.sortOrder === "des" ? "asc" : "des"
  //   this.setState({ employeeList: sortId, sortOrder: newSortId })
  // }

  handleName = () => {
    const sortName = this.state.employeeList.sort((a, b) => {
      let nameA = a.firstName.toUpperCase();
      let nameB = b.lastName.toLowerCase();
      if (this.state.sortOrder !== "des") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0
    } else { 
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    }
  })
  const newSort = this.state.sortOrder === "des" ? "asc" : "des"
  this.setState({ employeeList: sortName, sortOrder: newSort })
}
  
  render() {
      return(
      <>
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col" onClick={() => this.handleName()}>First Name</th>
          <th scope="col" onClick={() => this.handleName()}>Last Name</th>
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
