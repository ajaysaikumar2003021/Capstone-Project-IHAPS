import React from "react";
const Curriculum = () => {
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
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Department
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>College of Science</option>
                      <option>College of Education</option>
                      <option>College of Business</option>
                      <option>College of Humanity Sciences</option>
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
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Undergraduate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
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
                    <select id="inputState" className="form-select">
                      <option selected>Sustainability-Focused</option>
                      <option>Sustainability-Inclusive</option>
                      <option>None</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Semester Offered
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Spring</option>
                      <option>Fall</option>
                      <option>Summer</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Year Offered</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
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
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
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
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Project POC
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Type of Program Project
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Contributes to the following impact area(s)
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Campus Engagement</option>
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
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Project Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
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
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
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
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      College/Unit
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>College of Science</option>
                      <option>College of Education</option>
                      <option>College of Business</option>
                      <option>College of Humanity Sciences</option>
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
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Undergraduate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
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
                    <select id="inputState" className="form-select">
                      <option selected>Major</option>
                      <option>Minor</option>
                      <option>Degree</option>
                      <option>Concentration</option>
                      <option>An Immersive Experience</option>
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
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
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
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
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
                    <select id="inputState" className="form-select">
                      <option selected>Spring</option>
                      <option>Fall</option>
                      <option>Summer</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Program Active or Inactive
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Spring</option>
                      <option>Active Program</option>
                      <option>Inactive Program</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Year Program Started
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date Academic Year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Project POC
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-6">
                    <label for="inputAddress" className="form-label fw-bold">
                      Website Url for Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                    ></textarea>
                  </div>

                  <div className="col-6">
                    <label for="inputAddress" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
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
