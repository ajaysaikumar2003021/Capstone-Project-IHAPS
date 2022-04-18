import React, {useState, useEffect} from "react";

import {URL_SERVER} from '../serverurl';


let departments= {
  "College of Science and Engineering": [
    "Biology and Biotechnology",
    "Computing Sciences",
    "Engineering",
    "Environmental Science",
    "Mathematics and Statistics",
    "Physical and Applied Sciences"

  ],
  "College of Business": [
    "Accounting",
    "Decision Sciences, Economics, Finance and Marketing",
    "Healthcare Administration",
    "Management",
    "Management Information Systems"
  ],
  "College of Education": [
    "Counseling, Special Education and Diversity",
    "Curriculum and Instruction",
    "Educational Leadership and Policy Analysis",
    "Literacy, Library and Learning Technologies"

  ],
  "College of Human Sciences and Humanities": [
    "Clinical, Health, and Applied Sciences",
    "Communication and Studio Arts",
    "Liberal Arts",
    "Psychology",
    "Social and Cultural Sciences"

  ]
}

function getColleges(){
  const colleges = [];
  for(const c in departments){
    colleges.push(c)
  }
  return colleges;
}

function getDepartments(college){
  return departments[college];
}

const initial_statePTPO = {
  'reporting_date': '',
  'peer_to_peer_outreach_type': '',
  'peer_to_peer_outreach_title': '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'description': '',
  'educators_training': '',
  'target_audience': '',
  'program_starting_date': '',
  'program_status': '',
  'num_actively_trained_educators': '',
  'num_weeks_program_is_active_annually': '',
  'num_hours_worked_weekly_per_trained_educators': '',
  'num_hours_worked_annualy_by_trained_educators': '',
  'program_url': '',
  'supporting_document': '',
}

const initial_stateSSGPI = {
  'reporting_date': '',
  'student_sust_grp_prog_initiative_type': '',
  'student_sust_grp_prog_initiative_title': '',
  'description': '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'target_audience': '',
  'description_of_measureable_impacts': '',
  'supporting_outreach_materials': '',
  'supporting_outreach_materials_description': '',
  'student_sust_grp_prog_initiative_url': '',
  'supporting_document': '',
}

const initial_stateCEC = {
  'reporting_date': '',
  'continuing_education_course_title' : '',
  'college_or_unit' : '',
  'department' : '',
  'course_description' : '',
  'course_type' : '',
  'semester_offered' : '',
  'academic_year' : '',
}

const initial_stateSPD = {
  'reporting_date': '',
  'staff_professional_development_title' : '',
  'description' : '',
  'dates_offered' : '',
  'num_of_staff_participants' : '',
  'internally_or_externally_funded' : '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'staff_professional_development_url' : '',
  'supporting_document' : ''
}

const initial_stateCEP = {
  'reporting_date': '',
  'ce_program_title' : '',
  'description' : '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'semester_program_started' : '',
  'year_program_started' : '',
  'program_status' : ''
}

const initial_stateCP = {
  'reporting_date': '',
  'community_partnership_title' : '',
  'description' : '',
  'supported' : '',
  'timeframe' : '',
  'type_of_partnership' : '',
  'vulnerable_population_engagement' : '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'community_partnership_url' : ''
}



const CommunityEngagement = () => {

// PTPO
// SSGPI
// CEC
// SPD
// CEP
// CP

  const [PTPO, setPTPO] = useState(initial_statePTPO);
  const [SSGPI, setSSGPI] = useState(initial_stateSSGPI);
  const [CEC, setCEC] = useState(initial_stateCEC);
  const [SPD, setSPD] = useState(initial_stateSPD);
  const [CEP, setCEP] = useState(initial_stateCEP);
  const [CP, setCP] = useState(initial_stateCP);

  const handleInputChangeSSGPI = (e) => {
    setSSGPI(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(SSGPI);
  }

  const handleInputChangePTPO = (e) => {
    setPTPO(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(PTPO);
  }

  const handleInputChangeCEC = (e) => {
    setCEC(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(CEC);
  }

  const handleInputChangeSPD = (e) => {
    setSPD(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(SPD);
  }

  const handleInputChangeCEP = (e) => {
    setCEP(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(CEP);
  }

  const handleInputChangeCP = (e) => {
    setCP(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(CP);
  }

  

  const handleSubmitPTPO = (e) => {
    e.preventDefault();
    console.log(PTPO);
    
    const uploadData = new FormData();
    // uploadData.append(...state);
    for (let key in PTPO) {
      uploadData.append(key, PTPO[key]);
    }
    console.log("uploadData: ", uploadData);
    
    fetch(`${URL_SERVER}/campus-and-community/peertopeeroutreach/`, {
        method: 'POST',
        // headers: {  'Content-Type': 'application/json' },
        // body: JSON.stringify(PTPO)
        body: uploadData
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
        console.log(data)
        setPTPO(initial_statePTPO)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitSSGPI = (e) => {
    e.preventDefault();
    console.log(SSGPI);
    
    const uploadData = new FormData();
    // uploadData.append(...state);
    for (let key in SSGPI) {
      uploadData.append(key, SSGPI[key]);
    }
    console.log("uploadData: ", uploadData);
    

    fetch(`${URL_SERVER}/campus-and-community/studentsustgrpproginitiative/`, {
        method: 'POST',
        // headers: {  'Content-Type': 'application/json' },
        // body: JSON.stringify(SSGPI)
        body: uploadData
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
        console.log(data)
        setSSGPI(initial_stateSSGPI)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCEC = (e) => {
    e.preventDefault();
    console.log(CEC);
    
    fetch(`${URL_SERVER}/campus-and-community/continuingeducationcourse/`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(CEC)
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
        console.log(data)
        setCEC(initial_stateCEC)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitSPD = (e) => {
    e.preventDefault();
    console.log(SPD);
    
    const uploadData = new FormData();
    // uploadData.append(...state);
    for (let key in SPD) {
      uploadData.append(key, SPD[key]);
    }
    console.log("uploadData: ", uploadData);
    

    fetch(`${URL_SERVER}/campus-and-community/staffprofessionaldevelopment/`, {
        method: 'POST',
        // headers: {  'Content-Type': 'application/json' },
        // body: JSON.stringify(SPD)
        body: uploadData
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
        console.log(data)
        setSPD(initial_stateSPD)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCEP = (e) => {
    e.preventDefault();
    console.log(CEP);
    
    fetch(`${URL_SERVER}/campus-and-community/communityeducationprogram/`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(CEP)
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
        console.log(data)
        setCEP(initial_stateCEP)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCP = (e) => {
    e.preventDefault();
    console.log(CP);
    
    fetch(`${URL_SERVER}/campus-and-community/communitypartnership/`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(CP)
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
        console.log(data)
        setCP(initial_stateCP)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Community Engagement</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Student Sustainability Groups, Programs and Initiatives
                </a>
              </li>

              <li className="nav-item">
                <a href="#profile" className="nav-link" data-bs-toggle="tab">
                  Peer-to-Peer Outreach
                </a>
              </li>

              <li className="nav-item">
                <a href="#messages" className="nav-link" data-bs-toggle="tab">
                  Continuing Education Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="#staff" className="nav-link" data-bs-toggle="tab">
                  Staff Professional Development
                </a>
              </li>
              <li className="nav-item">
                <a href="#community" className="nav-link" data-bs-toggle="tab">
                  Community Partnerships
                </a>
              </li>
              <li className="nav-item">
                <a href="#education" className="nav-link" data-bs-toggle="tab">
                  Continuing Education Programs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
              {/* SSGPI */}
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Student Sustainability Groups, Programs and Initiatives
                </h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      
                      name="reporting_date"
                      value={SSGPI.reporting_date}
                      onChange={handleInputChangeSSGPI}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Type of Student Sustainability Groups, Programs, and
                      Initiatives (Select One)
                    </label>
                    <select id="inputState" className="form-select"
                      name="student_sust_grp_prog_initiative_type"
                      value={SSGPI.student_sust_grp_prog_initiative_type}
                      onChange={handleInputChangeSSGPI}
                    >
                      <option selected>Choose...</option>
                      <option value="Active Students Groups Focused on Sustainability">
                        Active Students Groups Focused on Sustainability
                      </option>
                      <option value="College of Education">College of Education</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Groups, Programs, and Initiative Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="student_sust_grp_prog_initiative_title"
                      value={SSGPI.student_sust_grp_prog_initiative_name}
                      onChange={handleInputChangeSSGPI}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description/Mission of the Group, Program, or
                      Initiative
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="description"
                      value={SSGPI.description}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                    Target Audience(s) Group, Program or Initiative: (Select all that apply)
                    </label>
                    <select id="inputState" className="form-select"
                      name="target_audience"
                      value={SSGPI.target_audience}
                      onChange={handleInputChangeSSGPI}
                    >
                      <option selected>Choose...</option>
                      <option value="Students">Students</option>
                      <option value="Staff">Staff</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Alumni">Alumni</option>
                      <option value="Community">Community</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of the Measurable Impacts and/or
                      Positive Results (required for outreach campaigns):
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="description_of_measureable_impacts"
                      value={SSGPI.description_of_measurable_impacts}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Any supporting outreach materials and publications?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supporting_outreach_materials"
                        value="True"
                        checked={SSGPI.supporting_outreach_materials === "True"}
                        onChange={handleInputChangeSSGPI}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supporting_outreach_materials"
                        value="False"
                        checked={SSGPI.supporting_outreach_materials === "False"}
                        onChange={handleInputChangeSSGPI}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  {(SSGPI.supporting_outreach_materials === "True") ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Provide a description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="supporting_outreach_materials_description"
                      value={SSGPI.supporting_outreach_materials_description}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>
                  ) : null }
                  {/* POC UPDATE */}
                  
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_name"
                    value={SSGPI.poc_name}
                    onChange={handleInputChangeSSGPI}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_email"
                    value={SSGPI.poc_email}
                    onChange={handleInputChangeSSGPI}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_phone"
                    value={SSGPI.poc_phone}
                    onChange={handleInputChangeSSGPI}
                  ></input>
                  </div>
                  {/* POC UPDATE */}
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      URL (If available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="student_sust_grp_prog_initiative_url"
                      value={SSGPI.student_sust_grp_prog_initiative_url}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="supporting_document"
                      // value={SSGPI.supporting_doc}
                      onChange={(evt) => setSSGPI({ ...SSGPI, supporting_document: evt.target.files[0] })}

                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitSSGPI}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  PTPO*/}
              <div className="tab-pane fade" id="profile">
                <h4 className="mt-2 head-academic">Peer-to-Peer Outreach</h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_date"
                      value={PTPO.reporting_date}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Peer-to-Peer Sustainability outreach and Education Program
                      Type
                    </label>
                    <select id="inputState" className="form-select"
                      name="peer_to_peer_outreach_type"
                      value={PTPO.peer_to_peer_outreach_type}
                      onChange={handleInputChangePTPO}
                    >
                      <option selected>Choose...</option>
                      <option value="Student to Student">Student to Student</option>
                      <option value="Employee to Employee">Employee to Employee</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Peer-to-Peer Sustainability outreach and Education Program
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="peer_to_peer_outreach_title"
                      value={PTPO.peer_to_peer_outreach_title}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  {/* POC UPDATE */}
                                    
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_name"
                    value={PTPO.poc_name}
                    onChange={handleInputChangePTPO}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_email"
                    value={PTPO.poc_email}
                    onChange={handleInputChangePTPO}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_phone"
                    value={PTPO.poc_phone}
                    onChange={handleInputChangePTPO}
                  ></input>
                  </div>
                  {/* POC UPDATE */}

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      A Brief description of the Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={PTPO.description}
                      onChange={handleInputChangePTPO}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      How are the peer educators trained
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="educators_training"
                      value={PTPO.educators_training}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program's target audience(s)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="target_audience"
                      value={PTPO.target_audience}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Semester/Year Program Started
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="program_starting_date"
                      value={PTPO.program_starting_date}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Is the Program Active or Inactive?
                    </label>
                    <select id="inputState" className="form-select"
                      name="program_status"
                      value={PTPO.program_status}
                      onChange={handleInputChangePTPO}
                    >
                      <option selected>Choose...</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of actively trained Educators(Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_actively_trained_educators"
                      value={PTPO.num_actively_trained_educators}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail43" className="form-label fw-bold">
                      Number of weeks the educators program is active annually
                      (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_weeks_program_is_active_annually"
                      value={PTPO.num_weeks_program_is_active_annually}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Average or expected number of hours worked weekly per
                      trained educator(Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_hours_worked_weekly_per_trained_educators"
                      value={PTPO.num_hours_worked_weekly_per_trained_educators}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Total number of hours worked annually by trained educators
                      (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_hours_worked_annualy_by_trained_educators"
                      value={PTPO.num_hours_worked_annualy_by_trained_educators}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program URL (if available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="program_url"
                      value={PTPO.program_url}
                      onChange={handleInputChangePTPO}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="supporting_document"
                      // value={PTPO.supporting_document}
                      onChange={(evt) => setPTPO({ ...PTPO, supporting_document: evt.target.files[0] })}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitPTPO}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* CEC */}
              <div className="tab-pane fade" id="messages">
                <h4 className="mt-2 head-academic">
                  Continuing Education Courses
                </h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_date"
                      value={CEC.reporting_date}
                      onChange={handleInputChangeCEC}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Continuing Education Sustainability Course Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="continuing_education_course_title"
                      value={CEC.continuing_education_course_title}
                      onChange={handleInputChangeCEC}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      College/Unit
                    </label>
                    <select id="inputState" className="form-select"
                      name="college_or_unit"
                      onChange={handleInputChangeCEC}
                      value={CEC.college_or_unit}
                    >
                      <option selected>Choose...</option>
                      
                      {
                        getColleges().map((c, i) =>(
                          <option key={i} value={c}>{c}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Department
                    </label>
                    <select id="inputState" className="form-select"
                      name="department"
                      onChange={handleInputChangeCEC}
                      value={CEC.department}
                    >
                      <option selected>Choose...</option>
                    
                      {
                        getDepartments(CEC.college_or_unit)?.map((d, i) =>(
                          <option key={i} value={d}>{d}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="course_description"
                      value={CEC.course_description}
                      onChange={handleInputChangeCEC}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Course Type
                    </label>
                    <select id="inputState" className="form-select"
                      name="course_type"
                      value={CEC.course_type}
                      onChange={handleInputChangeCEC}
                    >
                      <option selected>Choose...</option>
                      <option value="Sustainability Focused">Sustainability Focused</option>
                      <option value="Sustainability Inclusive">Sustainability Inclusive</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Semester Offered
                    </label>
                    <select id="inputState" className="form-select"
                      name="semester_offered"
                      value={CEC.semester_offered}
                      onChange={handleInputChangeCEC}
                    >
                      <option selected>Choose...</option>
                      <option value="Spring">Spring</option>
                      <option value="Summer">Summer</option>
                      <option value="Fall">Fall</option>
                    </select>
                  </div>
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Academic Year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="academic_year"
                      value={CEC.academic_year}
                      onChange={handleInputChangeCEC}
                    ></input>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitCEC}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* SPD */}
              <div className="tab-pane fade" id="staff">
                <h4 className="mt-2 head-academic">
                  Staff Professional Development
                </h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_date"
                      value={SPD.reporting_date}
                      onChange={handleInputChangeSPD}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of Sustainbaility Professional Development or
                      Training Opportunity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="staff_professional_development_title"
                      value={SPD.staff_professional_development_title}
                      onChange={handleInputChangeSPD}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of Training
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={SPD.description}
                      onChange={handleInputChangeSPD}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Date(s) Offered
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="dates_offered"
                      value={SPD.dates_offered}
                      onChange={handleInputChangeSPD}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of Staff Participants (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_of_staff_participants"
                      value={SPD.num_of_staff_participants}
                      onChange={handleInputChangeSPD}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Internally-Offered or Externally-Supported
                    </label>
                    <select id="inputState" className="form-select"
                      name="internally_or_externally_funded"
                      value={SPD.internally_or_externally_funded}
                      onChange={handleInputChangeSPD}
                    >
                      <option selected>Choose...</option>
                      <option value="payment">payment</option>
                      <option value="reimbursement">reimbursement</option>
                      <option value="subsidy">subsidy</option>
                    </select>
                  </div>

                  {/* POC UPDATE */}
                                    
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_name"
                    value={SPD.poc_name}
                    onChange={handleInputChangeSPD}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_email"
                    value={SPD.poc_email}
                    onChange={handleInputChangeSPD}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_phone"
                    value={SPD.poc_phone}
                    onChange={handleInputChangeSPD}
                  ></input>
                  </div>
                  {/* POC UPDATE */}
                  <div className="col-md-12">
                    <label className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="supporting_doc"
                      // onChange={handleInputChangeSPD}
                      // value={SPD.supporting_doc}
                      onChange={(evt) => setSPD({ ...SPD, supporting_document: evt.target.files[0] })}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitSPD}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* CP */}
              <div className="tab-pane fade" id="community">
                <h4 className="mt-2 head-academic">Community Partnerships</h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_date"
                      value={CP.reporting_date}
                      onChange={handleInputChangeCP}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of the institution’s formal community partnership to
                      advance sustainability
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="community_partnership_title"
                      value={CP.community_partnership_title}
                      onChange={handleInputChangeCP}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      A brief description of the institution’s formal community
                      partnership to advance sustainability.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={CP.description}
                      onChange={handleInputChangeCP}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Does the institution provide financial or material support
                      for the partnership?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supported"
                        value="True"
                        checked={CP.supported === "True"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supported"
                        value="False"
                        checked={CP.supported === "False"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Which of the following best describes the partnership
                      timeframe?
                    </label>
                    <select id="inputState" className="form-select"
                      name="timeframe"
                      value={CP.timeframe}
                      onChange={handleInputChangeCP}
                    >
                      <option selected>Choose...</option>
                      <option value="Short-Term Project/Event">Short-Term Project/Event</option>
                      <option value="Multi-Year/Ongoing">Multi-Year/Ongoing</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Which of the following best describes the partnership?
                    </label>
                    <select id="inputState" className="form-select"
                      name="type_of_partnership"
                      value={CP.type_of_partnership}
                      onChange={handleInputChangeCP}
                    >
                      <option selected>Choose...</option>
                      <option value="Sustainability Focused">Sustainability Focused</option>
                      <option value="Sustainability Related">Sustainability Related</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Are underrepresented groups and/or vulnerable populations
                      engaged as equal partners (in strategic planning,
                      decision-making, implementation, and review)?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="vulnerable_population_engagement"
                        value="True"
                        checked={CP.vulnerable_population_engagement === "True"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="vulnerable_population_engagement"
                        value="False"
                        checked={CP.vulnerable_population_engagement === "False"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  {/* POC UPDATE */}
                  
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_name"
                    value={CP.poc_name}
                    onChange={handleInputChangeCP}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_email"
                    value={CP.poc_email}
                    onChange={handleInputChangeCP}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_phone"
                    value={CP.poc_phone}
                    onChange={handleInputChangeCP}
                  ></input>
                  </div>
                  {/* POC UPDATE */}
                  <div className="col-md-12">
                    <label className="form-label fw-bold">
                      Website URL (If available)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="community_partnership_url"
                      value={CP.community_partnership_url}
                      onChange={handleInputChangeCP}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitCP}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* CEP */}

              {/* CEP */}
              <div className="tab-pane fade" id="education">
                <h4 className="mt-2 head-academic">
                  Continuing Education Programs
                </h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_date"
                      value={CEP.reporting_date}
                      onChange={handleInputChangeCEP}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of the sustainability-focused certificate program
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="ce_program_title"
                      value={CEP.ce_program_title}
                      onChange={handleInputChangeCEP}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={CEP.description}
                      onChange={handleInputChangeCEP}
                    ></textarea>
                  </div>

                  {/* POC UPDATE */}
                                    
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_name"
                    value={CEP.poc_name}
                    onChange={handleInputChangeCEP}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_email"
                    value={CEP.poc_email}
                    onChange={handleInputChangeCEP}
                  ></input>
                  </div>
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    POC Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="poc_phone"
                    value={CEP.poc_phone}
                    onChange={handleInputChangeCEP}
                  ></input>
                  </div>
                  {/* POC UPDATE */}

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold"
                      
                    >
                      Semester Program Started
                    </label>
                    <select id="inputState" className="form-select"
                      name="semester_program_started"
                      value={CEP.semester_program_started}
                      onChange={handleInputChangeCEP}
                    >
                      <option selected>Choose...</option>
                      <option value="Spring">Spring</option>
                      <option value="Fall">Fall</option>
                      <option value="Summer">Summer</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Year Program Started
                    </label>
                    <select id="inputState" className="form-select"
                      name="year_program_started"
                      value={CEP.year_program_started}
                      onChange={handleInputChangeCEP}
                    >
                      <option selected>Choose...</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Program Status
                    </label>
                    <select id="inputState" className="form-select"
                      name="program_status"
                      value={CEP.program_status}
                      onChange={handleInputChangeCEP}
                    >
                    <option selected>Choose...</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitCEP}
                    >
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

export default CommunityEngagement;
