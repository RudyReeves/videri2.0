import React, { Component } from 'react';
import './ContentNavIcon.css';

// One navigation icon
class ContentNavIcon extends Component {
  render() {
    return (
      <div className="ContentNavIcon--root">
          <li
            className={"ContentNavIcon--folder " + (this.props.currentFolder === this.props.index ? "open" : "closed")}
            onClick={this.props.handleClickFolder(this.props.index)}>
            <div className="ContentNavIcon--label">{this.props.label}</div>
          </li>
      </div>
    );
  }
}

export default ContentNavIcon;
