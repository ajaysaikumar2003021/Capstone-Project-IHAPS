import React, { useState, useEffect } from "react";
import { URL_SERVER } from "../serverurl";

const AcademicCourses = () => {
    const [state, setState] = useState([]);
    useEffect(() => {

      fetch(`${URL_SERVER}/curriculum/apreport/`, {
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
      <h2 className="curriculum-head">Sustainability Programs Outcomes</h2>
      <div className="container report-curriculum">
        <table class="table table-striped table-bordered table-curriculum">
          <thead>
            <tr>
              <th scope="col">Outcomes</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of programs by level</td>
              <td>
              {
                state.data? Object.keys(state.data['1']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{key}</dt>
                      <dd>{ state.data['1'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            <tr>
            <td>Number of programs by type</td>
            <td>
            {
                state.data? Object.keys(state.data['2']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{ key }</dt>
                      <dd>{ state.data['2'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            <tr>
              <td>Name and brief description of the sustainability-focused program type</td>
              <td>
              {
                state.data? Object.keys(state.data['3']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{key}</dt>
                      <dd>{ state.data['3'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            <tr>
              <td>Number of Programs with one or more sustainability-focused learning outcomes</td>
              <td>{state.data? state.data['4']: 0}</td>
            </tr>
            <tr>
              <td>Sustainability-focused programs by department</td>
              {/* <td>{state.data? state.data['5']: 0}</td> */}
              <td>
              {
                state.data? Object.keys(state.data['5']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{key}</dt>
                      <dd>{ state.data['5'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            
          </tbody>
          <tfoot>
            <tr>
              <td>Last Updated AT</td>
              <td>{state.data? state.data['6']: "No Time Stamp Found"}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AcademicCourses;
