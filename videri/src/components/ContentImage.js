import React, { Component } from 'react';
import './ContentImage.css';


// One item in the list of contents
class ContentImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  formatDateOrName = (urlParts) => {
    if (!urlParts) { return false; }
    return (urlParts.split('\\').pop().split('/').pop()).split('_')[0];
  };

  getImageDetails = (parseableUrls) => {
    const userImageUrlParts = parseableUrls[0];
    const previewUrlParts = parseableUrls[1];
    const result1 = this.formatDateOrName(userImageUrlParts);
    const result2 = this.formatDateOrName(previewUrlParts);
    let result = result1 || result2;
    if (result.length > 20) {
      result = result.substr(0, 17) + "...";
    }
    return result;
  };

  getImageType = () => {
    const videoLength = this.props.isVideo ? "00:30" : "";
    const className = "ContentImage--type-" + (this.props.isVideo ? "video" : "image");
    return (
      <div className={className + "-container"}>
        <div
          className={className}
        />
        {videoLength}
      </div>
    );
  };

  getImageUrl = () => {
    if (this.props.isVideo) {
      return "https://i.vimeocdn.com/video/" + this.props.img.picture_id + "_960x540";
    }
    return this.props.img.webformatURL;
  };

  getResolutionString = (width, height) => {
    if (this.props.isVideo) { return "1920 x 1080" };
    return width.toString() + " x " + height.toString();
  };

  handleClick = () => {
    this.props.handleClick(this.getImageUrl());
  };

  render() {
    const img = this.props.img;
    const url = this.getImageUrl();
    const parseableUrls = this.props.isVideo ? [img.picture_id] : [img.previewURL, img.userImageURL];
    const createdDateOrName = this.getImageDetails(parseableUrls);
    const resolution = this.getResolutionString(img.imageWidth, img.imageHeight);
    return (
      <div className={"ContentImage--root"} onClick={this.handleClick}>
        <div
          className={"ContentImage--item " + (this.state.selected ? "selected" : "")}
          style={{backgroundImage: "url('" + url + "')"}}
        />
        <div className="ContentImage--info">
          {this.getImageType()}
          <div className="ContentImage--resolution">{resolution}</div>
          <div className="ContentImage--date-name">{createdDateOrName}</div>
          <div className="ContentImage--created">
            <div className="ContentImage--created-label">Created On</div>
            <div className="ContentImage--created-value">{'01/01/2018'}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentImage;
