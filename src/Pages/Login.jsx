import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Login</h2>
        <div className="container form-login">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                UHCL Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <br />
          {/* <Link className="nav-link text-center" to="/signup">
            Create an Account
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Login;
