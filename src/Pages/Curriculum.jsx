import React, { useState, useEffect } from "react";
import CreatableSelect from 'react-select/creatable';
import { URL_SERVER } from "../serverurl";

const initial_stateAC = {
  sust_course_title: '',
  department : '',
  level_of_course : '',
  course_type : '',
  semester_offered : '',
  year_offered : ''
}

const initial_stateAP = {
  'sust_focused_academic_program' : '',
    'college_or_unit' : '',
    'level_of_program' : '',
    'program_type' : '',
    'description' : '',
    'website_url' : '',
    'poc' : '',
    'adopted_sust_focused_learning_outcome' : '',
    'requires_successful_completion_of_sust_focused_course' : '',
    'semester_program_started' : '',
    'year_program_started' : '',
    'program_active' : '',
    'reporting_date' : ''
}

const initial_stateCLL = {
  'project_name' : '',
  'poc' : '',
  'project_type' : '',
  'contribution_to_impact_area' : '',
  'description' : '',
  'project_date' : '',
  'academic_year' : '',
  'project_url' : '',
  'relative_doc' :''
}

const impact_area_options = [
  {value: '', label: 'Choose...'},
  {value: 'Campus Engagement', label: 'Campus Engagement'},
  {value: 'Public Engagement', label: 'Public Engagement'},
  {value: 'Air & Climate', label: 'Air & Climate'},
  {value: 'Buildings', label: 'Buildings'},
  {value: 'Energy', label: 'Energy'},
  {value: 'Food & Dining', label: 'Food & Dining'},
  {value: 'Grounds', label: 'Grounds'},
  {value: 'Purchasing', label: 'Purchasing'},
  {value: 'Transportation', label: 'Transportation'},
  {value: 'Waste', label: 'Waste'},
  {value: 'Water', label: 'Water'},
  {value: 'Coordination & Planning', label: 'Coordination & Planning'},
  {value: 'Diversity & Affordability', label: 'Diversity & Affordability'},
  {value: 'Investment & Finance', label: 'Investment & Finance'},
  {value: 'Wellbeing & Work', label: 'Wellbeing & Work'}
]
const Curriculum = () => {
  const [stateAC, setStateAC] = useState(initial_stateAC);
  const [stateAP, setStateAP] = useState(initial_stateAP);
  const [stateCLL, setStateCLL] = useState(initial_stateCLL);
  const [POC, setPOC] = useState();

  // const [state, setState] = useState(initial_state);
  
  useEffect(() => {
    fetch(URL_SERVER + '/curriculum/poc')
    .then(res => res.json())
    .then(data => {
      setPOC(data);
      // console.log(POC);
    })
  }, [])


  const handleInputChangeAC = (e) => {
    console.log(e.target.value);
    console.log("State", stateAC);
    setStateAC(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  
  const handleInputChangeAP = (e) => {
    console.log(e.target.value);
    console.log("State", stateAP);
    setStateAP(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleInputChangeCLL = (e) => {
    console.log(e.target.value);
    console.log("State", stateCLL);
    
    setStateCLL(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  
  const handleSubmitAC = (e) => {
    e.preventDefault();
    console.log(stateAC);
    
    fetch(`${URL_SERVER}/curriculum/academiccourse/`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(stateAC)
        // body: state
    })
    .then(data => data.json())
    .then(data => {
        // console.log(data.token);
        console.log(data)
        setStateAC(initial_stateAC);
        // alert('Form Submitted Successfully!!')
    })
    .catch(err => {
        alert('Form Submission Failed!!')
        console.log(err)
    })
    
  }

  const handleSubmitAP = (e) => {
    e.preventDefault();
    console.log(stateAP);
    
    fetch(`${URL_SERVER}/curriculum/academicprogram/`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(stateAP)
        // body: state
    })
    .then(data => data.json())
    .then(data => {
        // console.log(data.token);
        console.log(data)
        setStateAP(initial_stateAP)
        // alert('Form Submitted Successfully!!')
    })
    .catch(err => {
        alert('Form Submission Failed!!')
        console.log(err)
    })
    
  }

  const handleSubmitCLL = (e) => {
    e.preventDefault();
    console.log(stateCLL);
    
    fetch(`${URL_SERVER}/curriculum/campusaslivinglab/`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(stateCLL)
        // body: state
    })
    .then(data => data.json())
    .then(data => {
        // console.log(data.token);
        console.log(data)
        setStateCLL(initial_stateCLL)
        // alert('Form Submitted Successfully!!')
    })
    .catch(err => {
        alert('Form Submission Failed!!')
        console.log(err)
    })
    
  }


  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Curriculum</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Sustainable Courses
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a href="#profile" className="nav-link" data-bs-toggle="tab">
                  Applied Student Learning
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a href="#messages" className="nav-link" data-bs-toggle="tab">
                  Sustainable Programs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
            {/* academic cources */}
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">Academic Courses</h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Sustainability Course Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="sust_course_title"
                      value={stateAC.sust_course_title}
                      onChange={handleInputChangeAC}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Department
                    </label>
                    <select 
                      id="inputState" 
                      className="form-select"
                      name="department"
                      value={stateAC.department}
                      onChange={handleInputChangeAC}
                      >
                      <option>Choose...</option>
                      <option selected value="College of Science">College of Science</option>
                      <option value="College of Education">College of Education</option>
                      <option value="College of Business">College of Business</option>
                      <option value="College of Humanity Sciences">College of Humanity Sciences</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Level of Course
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_course"
                        id="inlineRadio1"
                        value="ug"
                        onChange={handleInputChangeAC}
                        selected={stateAC.level_of_course === "ug"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Undergraduate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_course"
                        id="inlineRadio2"
                        value="pg"
                        onChange={handleInputChangeAC}
                        selected={stateAC.level_of_course === "pg"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Graduate
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Course Type
                    </label>
                    <select 
                      id="inputState" 
                      className="form-select"
                      name="course_type"
                      onChange={handleInputChangeAC}
                      value={stateAC.course_type}  
                    >
                      <option>Choose...</option>
                      <option selected value="Sustainability-Focused">Sustainability-Focused</option>
                      <option value="Sustainability-Inclusive">Sustainability-Inclusive</option>
                      <option value="None">None</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Semester Offered
                    </label>
                    <select 
                      id="inputState" 
                      className="form-select"
                      name="semester_offered"
                      value={stateAC.semester_offered}
                      onChange={handleInputChangeAC}
                    >
                      <option>Choose...</option>
                      <option selected value="Spring">Spring</option>
                      <option value="Fall">Fall</option>
                      <option value="Summer">Summer</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Year Offered</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="year_offered"
                      value={stateAC.year_offered}
                      onChange={handleInputChangeAC}
                    />
                  </div>

                  <div className="col-12">
                    <label for="inputAddress" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                      name="description"
                      value={stateAC.description}
                      onChange={handleInputChangeAC}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitAC}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* campus as a living lab */}
              <div className="tab-pane fade" id="profile">
                <h4 className="mt-2 head-academic">Applied Student Learning</h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="project_name"
                      value={stateCLL.project_name}
                      onChange={handleInputChangeCLL}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      POC
                    </label>
                    <select 
                      id="inputState" className="form-select"
                      name="poc"
                      onChange={handleInputChangeCLL}
                      value={stateCLL.poc}  
                    >
                      <option selected>Choose...</option>
                      {POC? POC.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      )): null}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Type of Program Project
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="project_type"
                      value={stateCLL.project_type}
                      onChange={handleInputChangeCLL}
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Contributes to the following impact area(s)
                    </label>
                    <select id="inputState" className="form-select" 
                      // multiple="multiple"
                      name="contribution_to_impact_area"
                      onChange={handleInputChangeCLL}
                      value={stateCLL.contribution_to_impact_areas}
                    >
                      <option selected>Choose...</option>
                      <option>Campus Engagement</option>
                      <option>Public Engagement</option>
                      <option>Air & Climate</option>
                      <option>Buildings</option>
                      <option>Energy</option>
                      <option>Food & Dining</option>
                      <option>Grounds</option>
                      <option>Purchasing</option>
                      <option>Transportation</option>
                      <option>Waste</option>
                      <option>Water</option>
                      <option>Coordination & Planning</option>
                      <option>Diversity & Affordability</option>
                      <option>Investment & Finance</option>
                      <option>Wellbeing & Work</option>
                    </select>
                    {/* <CreatableSelect
                      isMulti
                      name="contribution_to_impact_areas"
                      options={impact_area_options}
                      onChange={handleInputChangeCLL}
                      value={stateCLL.contribution_to_impact_areas}
                    /> */}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Project Date</label>
                    
                    <input
                      type="date"
                      className="form-control"
                      name="project_date"
                      onChange={handleInputChangeCLL}
                      value={stateCLL.project_date}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Academic Year</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="academic_year"
                      value={stateCLL.academic_year}
                      onChange={handleInputChangeCLL}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Upload Relevant Docs
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-6">
                    <label for="inputAddress" className="form-label fw-bold">
                      Url (If Available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                      name="project_url"
                      value={stateCLL.project_url}
                      onChange={handleInputChangeCLL}
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Provide a brief description of the projects and how they
                      contribute to understanding or advancing sustainability in
                      relation to the impact area:
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="description"
                      value={stateCLL.description}
                      onChange={handleInputChangeCLL}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitCLL}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* academic program */}
              <div className="tab-pane fade" id="messages">
                <h4 className="mt-2 head-academic">Academic Progress</h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Sustainability-Focused Academic Program Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="sust_focused_academic_program"
                      value={stateAP.sust_focused_academic_program}
                      onChange={handleInputChangeAP}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      College/Unit
                    </label>
                    <select id="inputState" className="form-select"
                      name="college_or_unit"
                      onChange={handleInputChangeAP}
                      value={stateCLL.college_or_unit}
                    >
                      <option selected>Choose...</option>
                      <option value="College of Science">College of Science</option>
                      <option value="College of Education">College of Education</option>
                      <option value="College of Business">College of Business</option>
                      <option value="College of Humanity Sciences">College of Humanity Sciences</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Level of Program
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_program"
                        id="inlineRadio1"
                        value="ug"
                        onChange={handleInputChangeAP}
                        selected={stateAP.level_of_program === "ug"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Undergraduate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_program"
                        id="inlineRadio2"
                        value="pg"
                        onChange={handleInputChangeAP}
                        selected={stateAP.level_of_program === "pg"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Graduate
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Program Type
                    </label>
                    <select id="inputState" className="form-select"
                      name="program_type"
                      onChange={handleInputChangeAP}
                      value={stateAP.program_type}
                    >
                      <option selected>Choose...</option>
                      <option value="Major">Major</option>
                      <option value="Minor">Minor</option>
                      <option value="Degree">Degree</option>
                      <option value="Concentration">Concentration</option>
                      <option value="An Immersive Experience">An Immersive Experience</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Adopted one or more sustainability-focused learning
                      outcome(s)
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="adopted_sust_focused_learning_outcome"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChangeAP}
                        selected={stateAP.adopted_sust_focused_learning_outcomes === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="adopted_sust_focused_learning_outcome"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChangeAP}
                        selected={stateAP.adopted_sust_focused_learning_outcomes === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Requires the successful completion of a
                      sustainability-focused course
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="requires_successful_completion_of_sust_focused_course"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChangeAP}
                        selected={stateAP.requires_successful_completion_of_sust_focused_course === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="requires_successful_completion_of_sust_focused_course"
                        id="inlineRadio1"
                        value="False"
                        onChange={handleInputChangeAP}
                        selected={stateAP.requires_successful_completion_of_sust_focused_course === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Semester Offered
                    </label>
                    <select id="inputState" className="form-select"
                      name="semester_offered"
                      onChange={handleInputChangeAP}
                      value={stateAP.semester_offered}
                    >
                      <option selected>Choose...</option>
                      <option value="Spring">Spring</option>
                      <option value="Fall">Fall</option>
                      <option value="Summer">Summer</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Program Active or Inactive
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="program_active"
                        // id="inlineRadio1"
                        value="True"
                        onChange={handleInputChangeAP}
                        selected={stateAP.program_active === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="program_active"
                        // id="inlineRadio1"
                        value="False"
                        onChange={handleInputChangeAP}
                        selected={stateAP.program_active === "False"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Year Program Started
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="year_program_started"
                      onChange={handleInputChangeAP}
                      value={stateAP.year_program_started}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date Academic Year
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      // id="inputEmail4"
                      name="reporting_date"
                      onChange={handleInputChangeAP}
                      value={stateAP.reporting_date}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Project POC
                    </label>
                    <select id="" className="form-select"
                      name="poc"
                      onChange={handleInputChangeAP}
                      value={stateAP.poc}
                    >
                      <option selected>Choose...</option>
                      {POC ? POC.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      )): null}
                    </select>
                  </div>

                  <div className="col-6">
                    <label for="inputAddress" className="form-label fw-bold">
                      Website Url for Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      // id="inputAddress"
                      placeholder=""
                      name="website_url"
                      onChange={handleInputChangeAP}
                      value={stateAP.website_url}
                    ></textarea>
                  </div>

                  <div className="col-6">
                    <label for="inputAddress" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name="description"
                      onChange={handleInputChangeAP}
                      value={stateAP.description}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitAP}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
