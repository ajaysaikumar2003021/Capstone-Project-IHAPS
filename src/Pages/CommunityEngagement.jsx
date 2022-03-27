import React from "react";
const CommunityEngagement = () => {
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
              {/*  */}
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Student Sustainability Groups, Programs and Initiatives
                </h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Type of Student Sustainability Groups, Programs, and
                      Initiatives (Select One)
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>
                        Active Students Groups Focused on Sustainability
                      </option>
                      <option>College of Education</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Groups, Programs, and Initiative Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description/Mission of the Group, Program, or
                      Initiative
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Target Audience(s) Group, Program or Initiatve: (Select
                      all that apply)
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Students</option>
                      <option>Staff</option>
                      <option>Faculty</option>
                      <option>Alumni</option>
                      <option>Community</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of the Measurable Impacts and/or
                      Positive Results (required for outreach campaigns):
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Any supporting outreach materials and publications?
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
                    <label for="inputEmail4" className="form-label fw-bold">
                      If yes, provide a description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      URL (If available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  */}
              <div className="tab-pane fade" id="profile">
                <h4 className="mt-2 head-academic">Peer-to-Peer Outreach</h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Peer-to-Peer Sustainability outreach and Education Program
                      Type
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Student to Student</option>
                      <option>Employee to Employee</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Peer-to-Peer Sustainability outreach and Education Program
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program POC(Name, Position, Email)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      A Brief description of the Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      How are the peer educators trained
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program's target audience(s)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Semester/Year Program Started
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Is the Program Active or Inactive?
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of actively trained Educators(Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of weeks the educators program is active annually
                      (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Average or expected number of hours worked weekly per
                      trained educator(Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Total number of hours worked annually by trained educators
                      (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program URL (if available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  */}
              <div className="tab-pane fade" id="messages">
                <h4 className="mt-2 head-academic">
                  Continuing Education Courses
                </h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Continuing Education Sustainability Course Title
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
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Course Type
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Sustainability Focused</option>
                      <option>Sustainability Inclusive</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Semester and Year Offered
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Spring 2022</option>
                      <option>Summer 2022</option>
                      <option>Fall 2022</option>
                      <option>Spring 2023</option>
                      <option>Summer 2023</option>
                      <option>Fall 2023</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  */}
              <div className="tab-pane fade" id="staff">
                <h4 className="mt-2 head-academic">
                  Staff Professional Development
                </h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of Sustainbaility Professional Development or
                      Training Opportunity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of Training
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Date(s) Offered
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of Staff Participants (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Internally-Offered or Externally-Supported
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>payment</option>
                      <option>reimbursement</option>
                      <option>subsidy</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      POC for Training Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  */}
              <div className="tab-pane fade" id="community">
                <h4 className="mt-2 head-academic">Community Partnerships</h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of the institution’s formal community partnership to
                      advance sustainability
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      A brief description of the institution’s formal community
                      partnership to advance sustainability.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Does the institution provide financial or material support
                      for the partnership?
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
                      Which of the following best describes the partnership
                      timeframe?
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Short-Term Project/Event</option>
                      <option>Multi-Year/Ongoing</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Which of the following best describes the partnership?
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Sustainability Focused</option>
                      <option>Sustainability Related</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Are underrepresented groups and/or vulnerable populations
                      engaged as equal partners (in strategic planning,
                      decision-making, implementation, and review)?
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
                    <label for="inputEmail4" className="form-label fw-bold">
                      POC for Partnership (Name, Position, Email)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Website URL (If available)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/*  */}

              <div className="tab-pane fade" id="staff">
                <h4 className="mt-2 head-academic">
                  Staff Professional Development
                </h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of Sustainbaility Professional Development or
                      Training Opportunity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of Training
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Date(s) Offered
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of Staff Participants (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Internally-Offered or Externally-Supported
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>payment</option>
                      <option>reimbursement</option>
                      <option>subsidy</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      POC for Training Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  */}
              <div className="tab-pane fade" id="education">
                <h4 className="mt-2 head-academic">
                  Continuing Education Programs
                </h4>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Date (Academic Year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of the sustainability-focused certificate program
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program POC (Name,Position, Email)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Semester Program Started
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Spring</option>
                      <option>Fall</option>
                      <option>Summer</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Year Program Started
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputState" className="form-label fw-bold">
                      Year Program Started
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Active</option>
                      <option>Inactive</option>
                    </select>
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

export default CommunityEngagement;
