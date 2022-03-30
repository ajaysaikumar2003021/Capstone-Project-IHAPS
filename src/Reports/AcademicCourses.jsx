import React, { useState, useEffect } from "react";
import { URL_SERVER } from "../serverurl";
// import GetData from './TimeRange'

const AcademicCourses = () => {
    const [state, setState] = useState([]);
   
    useEffect(() => {
      // e.preventDefault();

      fetch(`${URL_SERVER}/curriculum/acreport/`, {
          method: 'GET',
          headers: {  'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(data => {
          setState(data);
          console.log(state)
      })
      .catch(err => console.log(err))

  },[]);

   
  return (
    <div className="container-fluid">
      <h2 className="curriculum-head">Report Academic Courses</h2>
      {/* <GetData onChange={handleDateChange} onClick={getData}/> */}
      <div className="container report-curriculum">
        <table class="table table-striped table-bordered table-curriculum">
          <thead>
            <tr>
              <th scope="col">Query</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total number of undergraduate courses offered by the institution</td>
              <td>{state.data? state.data['1']: 0}</td>
            </tr>
            <tr>
              <td>Number of undergraduate courses offered that are sustainability-focused</td>
              <td>{state.data? state.data['2']: 0}</td>
            </tr>
            <tr>
              <td>Number of undergraduate courses offered that are sustainability-inclusive</td>
              <td>{state.data? state.data['3']: 0}</td>
            </tr>
            <tr>
              <td>Total number of graduate coursesoffered by the institution</td>
              <td>{state.data? state.data['4']: 0}</td>
            </tr>
            <tr>
              <td>Number of graduate courses offered that are sustainability-focused</td>
              <td>{state.data? state.data['5']: 0}</td>
            </tr>
            <tr>
              <td>Number of graduate courses offered that are sustainability-inclusive</td>
              <td>{state.data? state.data['6']: 0}</td>
            </tr>
            <tr>
              <td>Total number of academic departments that offer courses (at any level)</td>
              <td>{state.data? state.data['7']: 0}</td>
            </tr>
            <tr>
              <td>Number of academic departments with sustainability course offerings</td>
              <td>{state.data? state.data['8']: 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicCourses;
