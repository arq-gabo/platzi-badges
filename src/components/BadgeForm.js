import React from "react";

class BadgeForm extends React.Component {
  state = {
    jobTitle: "Designer",
  };

  handleChange = (e) => {
    // console.log({
    //   value: e.target.value,
    //   name: e.target.name,
    // });

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Botton was click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
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
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="LastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="JobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
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
