import React from "react";

export const Contact = () => {
  return (
    <div class="col-12 contact">
      <h2 class="py-5">Contact</h2>

      <div className="row">
        <div className="col-12">
          <p class="contact-subs">>> Let's Socialize:</p>

          <ul class="socialize d-flex justify-content-center">
            <li>
              <a
                href="https://www.linkedin.com/in/peace-akpai-2a292097/"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/peaceawo" target="_blank">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {" "}
                <i class="fa fa-facebook"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {" "}
                <i class="fa fa-instagram"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row">
        <div class="col-12">
          <p class="contact-subs">>> Get in touch with me:</p>
          <ul class="contact-info  d-flex justify-content-center">
            <li>
              <span class="contact-icons">
                <i class="fa fa-map-marker"></i>
              </span>
              <span class="text"> Denver CO</span>
            </li>
            <li>
              <span class="contact-icons">
                <i class="fa fa-phone"></i>
              </span>
              <span class="text"> +1720-431-6485</span>
            </li>
            <li>
              <a href="mailto:peaceawo@gmail.com">
                <span class="contact-icons">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="text"> peaceawo@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <div class="contact-form">
            <form
              name="contactform"
              id="contactform"
              method="post"
              action="#"
              onsubmit="return(validate());"
              novalidate="novalidate"
            >
              <div class="row">
                <div class="form-group col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Name"
                    name="name"
                  ></input>
                </div>

                <div class="form-group col-md-6">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                    name="email"
                  ></input>
                </div>

                <div class="form-group col-12">
                  <label>Message</label>
                  <textarea
                    name="issues"
                    class="form-control"
                    id="iq"
                    placeholder="Enter Your Message Here"
                  ></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-default">
                Submit
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
