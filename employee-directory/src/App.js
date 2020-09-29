import React from 'react';
import './App.css';
import employees from './employees.json'

class App extends React.Component {
  state = {
    employeeList: employees
  }
  render() {
    return (
      <>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Title</th>
              <th scope="col">Pay Band</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
