import React from "react";
import Header from "../Components/Header.js";
function Contact() {
  return (
    <>
    <Header content="Contact"/>
      {/* Contact */}
      <div class="Contact">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <form>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input
                      class="form-control"
                      placeholder="Name"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input
                      class="form-control"
                      placeholder="Phone Number"
                      name="phone_nu"
                      type="text"
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input
                      class="form-control"
                      placeholder="Subject"
                      name="subject"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <textarea
                      class="textarea"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button class="send-btn" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end Contact */}
    </>
  );
}

export default Contact;
