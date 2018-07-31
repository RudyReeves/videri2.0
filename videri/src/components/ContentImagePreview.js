import React, { Component } from 'react';
import './ContentImagePreview.css';


// One item in the list of contents
class ContentImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }

  render() {
    const img = this.props.img;
    return (
      <div className={"ContentImage--root"} onClick={this.handleClick}>
        <div
          className={"ContentImage--item " + (this.state.selected ? "selected" : "")}
          style={{backgroundImage: "url('" + url + "')"}}
        />
        <div className="ContentImage--info">
          <div className="ContentImage--type">{img.type}</div>
          <div className="ContentImage--resolution">{resolution}</div>
          <div className="ContentImage--date-name">{this.getImageDetails(parseableUrls)}</div>
        </div>
      </div>
    );
  }
}

export default ContentImage;
