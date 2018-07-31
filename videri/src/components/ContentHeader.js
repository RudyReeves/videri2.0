import React, { Component } from 'react';
import './ContentHeader.css';



class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="ContentHeader--header">
        <div className="ContentHeader--header-logo">
          <span className="ContentHeader--viverdi-text">Viverdi</span>
          <span className="ContentHeader--content-text">Content</span>
        </div>
        <div className="ContentHeader--profile">
          <div className="ContentHeader--profile-img"></div>
          <div className="ContentHeader--username">{this.props.username}</div>
        </div>
      </header>
    );
  }
}

export default ContentHeader;
