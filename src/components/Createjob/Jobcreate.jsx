import React from "react";

const Jobcreate = ({
  cname,
  cweb,
  jtitle,
  jcategory,
  jtype,
  jlocation,
  srange,
  exp,
  qua,
  dline,
  japp,
  jdes,
}) => {
  return (
    <div className="create-job">
      <div className="job-h">
        <h2>Create a Job</h2>
      </div>

      <div className="form-create">
        <form action="">
          <div className="form-desc">
            <div className="com-des">
              <div className="company-des">
                <h2>{cname}</h2>
                <input type="text" placeholder="Name" id="cname" />
              </div>
              <div className="company-des">
                <h2>{cweb}</h2>
                <input type="text" placeholder="website Link" id="cwebsite" />
              </div>
            </div>

            <div className="jtype">
              <h2>{jtitle}</h2>
              <input type="text" placeholder="Title" />
            </div>

            <div className="jcat">
              <div className="soption">
                <h2>{jcategory}</h2>
                <select  name="cars" id="cars">
                  <option value="Technology">Technology</option>
                  <option value="Management">Management</option>
                  <option value="Receptionist">Receptionist</option>
                </select>
              </div>
              <div className="soption">
                <h2>{jtype}</h2>
                <select  name="cars" id="cars">
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </div>
            </div>

            <div className="jlocation">
              <div className="soption">
                <h2>{jlocation}</h2>
                <input type="text" placeholder="location" id="jlocation" />
              </div>
              <div className="soption">
                <h2>{srange}</h2>
                <input type="text" placeholder="Salary Range" id="jlocation" />
              </div>
              <div className="soption">
                <h2>{exp}</h2>
                <input type="text" placeholder="Experience" id="jlocation" />
              </div>
              <div className="soption">
                <h2>{qua}</h2>
                <input type="text" placeholder="Qualification" id="jlocation" />
              </div>
            </div>

            <div className="app-desc">
              <div className="appdes">
                <h2>{dline}</h2>
                <input
                  type="text"
                  name="deadline"
                  id="deadline"
                  placeholder="Job application deadline"
                />
              </div>
              <div className="appdes">
                <h2>{japp}</h2>
                <input
                  type="text"
                  name="alink"
                  id="alink"
                  placeholder="Job application link.url"
                />
              </div>
            </div>

            <div className="jobs-desc">
              <h2>{jdes}</h2>
              <textarea
                name="Job Description"
                id="jdesc"
                placeholder="Job Description"
                cols="165"
                rows="20"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jobcreate;