import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  © Copyright <strong>Engage</strong>. All Rights Reserved
                </p>
                <div className="credits">Designed with Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
