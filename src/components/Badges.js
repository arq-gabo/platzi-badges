import React from "react";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la empresa" />
        </div>

        <div>
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar Usuar"
          />

          <h1>
            Richard <br />
            Kaufman
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@prototipo3d</p>
        </div>

        <div>#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
