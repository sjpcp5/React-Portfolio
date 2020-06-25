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
                  Copyright @ 2020 <strong>Clever Ciphers</strong>. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
