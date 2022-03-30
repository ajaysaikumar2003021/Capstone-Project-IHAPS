import React, { useState } from "react";
import { URL_SERVER } from "../serverurl";
import GetData from './TimeRange'

const CampusAsLL = () => {
    const [state, setState] = useState([]);
    const [startdate, setStartdate] = useState()
    const [enddate, setEnddate] = useState()

    const getData = (e) => {
        e.preventDefault();

        fetch(`${URL_SERVER}/curriculum/cllreport?enddate=${enddate}&startdate=${startdate}`, {
            method: 'GET',
            headers: {  'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            setState(data);
            
            console.log(state)
        })
        .catch(err => console.log(err))

    }

    const handleDateChange = (e) => {
        if (e.target.name ==="startdate") {
          setStartdate(e.target.value);
        }
        else if (e.target.name ==="enddate") {
          setEnddate(e.target.value);
        }
      }

  return (
    <div className="container-fluid">
      <h2 className="curriculum-head">Applied Student Learning Report</h2>
      <GetData onChange={handleDateChange} onClick={getData}/>
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
                <td>Number of Projects by Impact Area (for date range)</td>
                <td>
                {
                    state.data? Object.keys(state.data['1']).map((key, i) => {
                    return(
                        <dl>
                        <dt>{ key }</dt>
                        <dd>{ state.data['1'][key] }</dd>
                        </dl>
                    )
                }): 0}
              </td>
            </tr>
            
            <tr>
                <td>Number of Projects by Impact Area (for date range)</td>
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
                <td>Number of Projects by type (for date range)</td>
                <td>
                {
                    state.data? Object.keys(state.data['3']).map((key, i) => {
                    return(
                        <dl>
                        <dt>{ key }</dt>
                        <dd>{ state.data['2'][key] }</dd>
                        </dl>
                    )
                }): 0}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampusAsLL;
