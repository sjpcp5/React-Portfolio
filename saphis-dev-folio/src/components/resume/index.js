import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section id="service" className="services-mf route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                  A summary of technical skills, work experience, and education
                  background.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-code-working" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Full Stack Web Development</h2>
                  <p className="s-description text-center">
                    Collaboratative web application design and server
                    development through git and kanban. Front end technologies
                    and frameworks using ReactJS, JavaScript, HTML5, CSS,
                    JQuery, Bootstrap, Tachyon, AJAX, SaSS, and backend MySQL,
                    Sequelize, MongoDB, Express and Node.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-map" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">
                    Geographic Information Systems Analyst
                  </h2>
                  <p className="s-description text-center">
                    Using ESRI ArcGeographic Information Systems Pro for map
                    creation and data manipulation in team-based projects,
                    synthesize pertinent spatial information for stakeholders in
                    relation to environmental cleanup sites and flooding, and
                    maintain and update valuable real property information in
                    accordance with Congressional and Department of Defense
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-stats-bars" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Urban Planning &amp; Design</h2>
                  <p className="s-description text-center">
                    A multidisciplinary approach to analyzing a city or
                    community’s environment challenges. Using human observation,
                    quanitative and qualitative analysis to synthize a designed
                    and tailored long term possible plan to acheive the
                    community's goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
