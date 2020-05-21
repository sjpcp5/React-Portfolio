import React, { Component } from "react";

export default class SectionFooter extends Component {
  render() {
    return (
      <div>
        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(assets/Dance.jpeg)" }}
        >
          {this.props.children}
        </section>
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up" />
        </a>
        <div id="preloader" />
      </div>
    );
  }
}
