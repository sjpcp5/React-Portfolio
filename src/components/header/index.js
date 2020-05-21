import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image"
        style={{ backgroundImage: "url(assets/haifa.jpeg)" }}
      >
        <div className="overlay-itro" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              {/*<p class="display-6 color-d">Hello, world!</p>*/}
              <h1 className="intro-title mb-4">I am Saphirah Pociluyko</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">
                  pronounced,Saf-fear-rah,Full Stack Developer,GIS Analyst,Urban
                  Planner
                </span>
                <strong className="text-slider" />
              </p>
              {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
