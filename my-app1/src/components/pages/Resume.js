import React from "react";

export const Resume = () => {
  return (
    <div className="main-resume">
      <div class="py-3">
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
            <div class="content">
              <p class="date">December 2019</p>
              <h4 class="work-name">Coding Bootcamp</h4>
              <i class="company-name">University of Denver</i>
            </div>
            <div class="content">
              <p class="date">May 2014</p>
              <h4 class="work-name">
                Mathematics - <p>Actuarial Science</p>
              </h4>
              <i class="company-name">Colorado State University</i>
            </div>
            <div class="content">
              <p class="date">Fall 2019</p>
              <i>
                Study Abroad:
                <span class="Abroad">
                  <i>International College of Beijing</i>
                </span>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 skill-wrapper">
          <h4 className="skilltitle">Technical Skills</h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="resume-button">
        <button type="download" class="button">
          <span>
            <i class="fa fa-download"></i>
          </span>
          <a
            href="./peaceawo/Documents/Peace-Akpai-Resume.pdf"
            download="Peace-Akpai-Resume"
          >
            DOWNLOAD
          </a>
        </button>
      </div>
    </div>
  );
};
export default Resume;