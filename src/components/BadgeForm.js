import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      value: e.target.value,
      name: e.target.name,
    });
  };

  handleClick = (e) => {
    console.log("Botton was click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>

          <button
            type="sumbit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
