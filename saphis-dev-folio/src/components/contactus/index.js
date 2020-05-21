import React, { Component } from "react";

export default class Contactus extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-8">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-center">Let's Work Together</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Please let me know how I can serve your development
                        needs. I look forward to working with you.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location">
                            Kansas City, Missouri
                          </span>
                        </li>
                        <li>
                          <span className="ion-ios-telephone" /> 757-310-9650
                        </li>
                        <li>
                          <span className="ion-email" /> sjpcp5@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/sjpcp5/">
                            <span className="ico-circle">
                              <i className="ion-social-linkedin" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/sjpcp5">
                            <span className="ico-circle">
                              <i className="ion-social-github" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/zingyp/">
                            <span className="ico-circle">
                              <i className="ion-social-instagram" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="../../assets/Pociluyko_DevResume2020.pdf">
                            <span className="ico-circle">
                              <i className="ion-document-text" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
