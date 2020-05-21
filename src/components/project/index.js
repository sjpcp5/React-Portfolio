import React from "react";

var Project = React.createClass({
  render: function () {
    return (
      <div className="col-md-4">
        <div className="work-box">
          <a href="../../assets/teamHTMLlg.png" data-lightbox="gallery-mf">
            <div className="work-img">
              <img
                src="../../assets/teamHTML.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </a>
          <div className="work-content">
            <a
              href="../../assets/teamHTMLlg.png"
              data-lightbox="gallery-mf"
            ></a>
            <div className="row">
              <a
                href="../../assets/teamHTMLlg.png"
                data-lightbox="gallery-mf"
              ></a>
              <div className="col-sm-8">
                <a
                  href="../../assets/teamHTMLlg.png"
                  data-lightbox="gallery-mf"
                >
                  <h2 className="w-title">Team Profile Generator</h2>
                </a>
                <div className="w-more">
                  <a
                    href="../../assets/teamHTMLlg.png"
                    data-lightbox="gallery-mf"
                  >
                    <span className="w-ctegory">
                      Test Driven Design Command Line Interface
                    </span>{" "}
                    / <span className="w-date">18 March 2020</span>
                    <p>
                      This app is a Node.js CLI app that takes information about
                      a software team and generates an HTML webpage. The webpage
                      will display summaries for each person.
                    </p>
                  </a>
                  <div className="overlay-text">
                    <a
                      href="../../assets/teamHTMLlg.png"
                      data-lightbox="gallery-mf"
                    ></a>
                    <a
                      href="https://github.com/sjpcp5/TeamRoster"
                      target="_blank"
                    >
                      <span className="ico-circle-symbol">
                        <i className="ion-social-github">
                          <h6 className="tooltiptext">see the code</h6>
                        </i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                  <div className="overlay-text">
                    <a href="https://youtu.be/QEHoLxdUpDc" target="_blank">
                      <span className="ion-ios-plus-outline">
                        <h6 className="tooltiptext">See Demo</h6>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Project;
