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
                    <div className="about-img">
                      <img
                        src="assets/profile.jpeg"
                        className="img-fluid rounded b-shadow-a"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        I am a Full Stack Developer , Geographer, and Marine
                        veteran who is a courageous adventurer who has seen the
                        world. My world view gives me a unique perspective when
                        working with diverse teams to find creative solutions.
                        My technical skills include MongoDB/Sequelize,
                        Express.js, React.js, Node.js, and Geographic
                        Information Systems.
                      </p>
                      <p className="lead">

                      </p>
                      <p className="lead">
                        I am a graduate of the University of Kansas
                        Full-Stack Web Development bootcamp. Currently working
                        for the U.S. Army Corps of Engineers, in Kansas City,
                        Missouri. I find programming incorporates my world view
                        with exciting puzzles to solve world problems.
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
