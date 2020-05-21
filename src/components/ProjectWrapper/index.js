import React, { Children } from "react";

var ProjectWrapper = React.createClass({
  render: function () {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Here are a few of my recent works.</p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          {Children}
        </div>
      </section>
    );
  },
});

export default ProjectWrapper;
