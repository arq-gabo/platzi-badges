import React from "react";
import "./styles/BadgesList.css";

class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />
        <div class="card-body">
          <h5 class="card-title">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </h5>
          <p class="card-text">@{this.props.badge.twitter}</p>
          <p class="card-text">{this.props.badge.jobTitle}</p>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div class="container">
        <ul>
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <BadgeListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
