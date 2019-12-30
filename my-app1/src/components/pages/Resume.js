import React from "react";

export const Resume = () => {
  return (
    <div className="col-sm-12 main-resume">
      <div class="py-5">
        <h2 class="">Resume</h2>
      </div>
      <div className="row resume">
        <div className="col-6 employment-wrapper">
          <h4 className="worktitile">
            <span className="education-icon">
              <i className="fa fa-briefcase"></i>
            </span>{" "}
            WORK HISTORY
          </h4>
          <div class="content">
            <p class="date">June 2019 - current</p>
            <h4 class="work-name">Assistant Center Director</h4>
            <i class="company-name">Mathnasuim at Cherry Hills</i>
            <p>
              - Monitor and manage self-performance utilizing overall center
              performance, customer service, lead conversation, staff
              performance, student progress achievements, and profit as
              indicators of success. <br />- Coaching and training new employees
              -Lead generations and converting leads into customers
            </p>
          </div>
          <div className="content">
            <p className="date">August 2015 - June 2019</p>
            <h4 className="work-name">Teacher</h4>
            <i className="company-name">Denver Public Schools</i>
            <p>
              - Plan and deliver lessons in secondary mathematics based on
              aligned content area.
              <br />- Collect and analyze data on student learning outcomes,
              summative and formative assessments to inform future instructions.
              <br />- Communicate and collaborate with other staff members to
              lead developmental projects for students and staff.
            </p>
          </div>
        </div>

        <div className="col-6">
          <div className="col-12 education-wrapper">
            <h4 className="educationtitile">
              <span className="education-icon">
                <i className="fa fa-graduation-cap"></i>
              </span>{" "}
              EDUCATION
            </h4>
            <div className="content">
              <p className="date">December 2019</p>
              <h4 className="work-name">Coding Bootcamp</h4>
              <i className="company-name">University of Denver</i>
            </div>
            <div className="content">
              <p className="date">May 2014</p>
              <h4 className="work-name">
                Mathematics - <p>Actuarial Science</p>
              </h4>
              <i className="company-name">Colorado State University</i>
            </div>
            <div className="content">
              <p className="date">Fall 2019</p>
              <i>
                Study Abroad:
                <span className="Abroad">
                  <i>International College of Beijing</i>
                </span>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 row">
        <h4 className="educationtitile">
          <span className="education-icon">
            <i className="fa fa-cogs"></i>
          </span>{" "}
          TECHNICAL SKILLS
        </h4>
      </div>
      <div className="technical-skills">
        <h5>REACT.JS</h5>
        <h5>ANGULAR</h5>
        <h5>HTML</h5>
        <h5>CSS</h5>
        <h5>BOOTSTRAP</h5>
        <h5>HANDLEBARS</h5>
        <h5>JAVASCRIPT</h5>
        <h5>JQUERY</h5>
        <h5>NODE.JS</h5>
        <h5>GIT</h5>
        <h5>HEROKU</h5>
        <h5>MONGODB</h5>
        <h5>FIREBASE</h5>
        <h5>EXPRESS</h5>
        <h5>API</h5>
        <h5>AJAX</h5>
      </div>
      <br />
      <br />
      <br />
      <div className="resume-button">
        <button type="download" className="button">
          <span>
            <i className="fa fa-download"></i>
          </span>
          <a
            href="my-app1/public/resume/resume.pdf"
            download="Peace-Akpai-Resume"
          >
            DOWNLOAD
          </a>
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Resume;
