import React from "react";

import "./styles/Badge.css";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la empresa" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar Usuar"
          />

          <h1>
            Jose <br />
            Guerra
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@prototipo3d</div>
        </div>

        <div className="Badge__footer">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
