import React, { Component } from "react";

export default class Aboutus extends Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src="assets/profile.jpeg"
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>
                            <span>Saphirah Pociluyko</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>
                            <span>Full Stack Developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>
                            <span>sjpcp5@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>
                            <span>(757) 310-9650</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>MongoDB-MySQL</span>
                      <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span>Express</span>
                      <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span>React</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span>Node</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        As a Marine veteran, I am a courageous adventurer who
                        has seen both the nice and dangerous places of the
                        world. My world view gives me a unique perspective when
                        working with teams to find solutions.
                      </p>
                      <p className="lead">
                        Currently working for the Department of the Army, U.S.
                        Army Corps of Engineers, Kansas City, Missouri, as a
                        Developer and Geographer.
                      </p>
                      <p className="lead">
                        I find programming incorporates my world view with my
                        problem solving skills, allowing me to dream of one day
                        landing on the moon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
