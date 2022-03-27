import React, {useState} from "react";

const initial_state = {
  "reporting_date" : "",
  "faculty_name" : "",
  "faculty_email" : "",
  "department_affiliation" : "",
  "sust_research_area" : "",
  "research_interests" : "",
  "peer_reviewed_journal" : "",
  "journal_detail" : "",
  "publication_deposited" : "",
  "presented_research_at_sust_conference" : "",
  "sust_research_conf_description" : "",
  "served_higher_edu": "",
  "sust_research_service_dates" : "",
  "support_url" : "",
  "supporting_document" : null
}

const Faculty = () => {

  const [state, setState] = useState(initial_state);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log("State", state);
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    
    fetch('http://127.0.0.1:8000/research-and-scholarship/facultysustresearchandservice/', {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(state)
        // body: state
    })
    .then(data => data.json())
    .then(data => {
        // console.log(data.token);
        console.log(data)
        setState(initial_state)
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
        <h2 className="curriculum-head">Research and Scholarship</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Research and Scholarship
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Faculty Sustainability Research and Service
                </h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="reporting_date"
                      value={state.reporting_date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Faculty Name(Who Conducts sustainability research)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="faculty_name"
                      value={state.faculty_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Faculty Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="faculty_email"
                      value={state.faculty_email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Departmental Affiliation
                    </label>
                    <select id="inputState" className="form-select" 
                      name="department_affiliation"
                      value={state.department_affiliation}
                      onChange={handleInputChange}
                      >
                      <option selected>Choose...</option>
                      <option value="College of Science">College of Science</option>
                      <option value="College of Education">College of Education</option>
                      <option value="College of Business">College of Business</option>
                      <option value="College of Humanity Sciences">College of Humanity Sciences</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Sustainability Research Areas
                    </label>
                    <select id="inputState" 
                      className="form-select"
                      name="sust_research_area"
                      value={state.sust_research_area}
                      onChange={handleInputChange}
                    >
                      <option selected>Choose...</option>
                      <option value="Environmental">Environmental</option>
                      <option value="Social">Social</option>
                      <option value="Economic">Economic</option>
                      <option value="Educational">Educational</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Research interests/topics or a brief description
                      justifying the individual's inclusion
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="research_interests"
                      value={state.research_interests}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Research published in Peer-Reviewed Journal ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="peer_reviewed_journal"
                        id="inlineRadio3"
                        value="yes"
                        onChange={handleInputChange}
                        checked={state.peer_reviewed_journal === "yes"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="peer_reviewed_journal"
                        id="inlineRadio3"
                        value="no"
                        onChange={handleInputChange}
                        checked={state.peer_reviewed_journal === "no"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="peer_reviewed_journal"
                        id="inlineRadio3"
                        value="pending"
                        onChange={handleInputChange}
                        checked={state.peer_reviewed_journal === "pending"}
                      />
                      <label className="form-check-label" for="inlineRadio3">
                        Pending
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      If Yes or Pending: Provide Publication title, Journal
                      Name, and Date of Publication
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="journal_detail"
                      value={state.publication_title}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      If Yes, is the publication deposited in a designated open
                      access repository ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="publication_deposited"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.publication_deposited === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="publication_deposited"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.publication_deposited === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Presented Research at a Higher Education sustainability
                      conference ? access repository ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="presented_research_at_sust_conference"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.presented_research_at_sust_conference === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="presented_research_at_sust_conference"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.presented_research_at_sust_conference === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      If Yes, Provide a list or brief description of the
                      conferences, presentations, and Dates.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="sust_research_conf_description"
                      value={state.sust_research_conf_description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Serve on a board or committee of an external higher
                      education sustainability network or conference ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="served_higher_edu"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.served_higher_edu === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="served_higher_edu"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.served_higher_edu === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      If Yes, Provide a list or brief description of the board
                      or committee appointments, and service dates.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="sust_research_service_dates"
                      value={state.sust_research_service_dates}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Support URL(s) (Optional)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="support_url"
                      value={state.support_url}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  {/* <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(evt) => setState({ ...state, supporting_document: evt.target.files[0] })}
                      name="supporting_document"
                    />
                  </div> */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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

export default Faculty;
