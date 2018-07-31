import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import ContentNavIcon from './ContentNavIcon';
import ContentImage from './ContentImage';
import './ContentPage.css';


// Component for signed-in users to display content
// For this code example, this is available on the
// page, but hidden until the user "logs in"
class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = "9648660-3c01ee2b5ccda2fbf07dbc7ae";
    this.state = {
      folder: 0,
      selectedSrc: '',
      navItems: ['cars', 'flowers', 'cities', 'people', 'clouds', 'kittens']
    };
  }

  componentDidMount() {
    // Initial load of images
    this.handleClickFolder(0)();
  };

  handleClickFolder = (i) => () => {
    this.setState({folder: i}, () => {
      // Fetch images
      fetch("https://pixabay.com/api/?key=" + this.API_KEY + "&q=" + this.state.navItems[i] + "&per_page=50")
        .then(res => res.json())
        .then((result) => {
          const newImages = result.hits.map((img, i) => {
            return (
              <ContentImage
                handleClick={this.handleClickItem}
                img={img}
                key={i}
              />
            );
          });
          // Then fetch videos
          fetch("https://pixabay.com/api/videos?key=" + this.API_KEY + "&q=" + this.state.navItems[i] + "&per_page=50")
            .then(videosResponse => videosResponse.json())
            .then((videoResult) => {
              const newVideos = videoResult.hits.map((video, videoIndex) => {
                return (
                  <ContentImage
                    handleClick={this.handleClickItem}
                    img={video}
                    isVideo
                    key={'video' + videoIndex}
                  />
                );
              });
              this.setState({images: newImages.concat(newVideos)});
            });
        }
      );
    });
  };

  handleAddFolder = () => {
    const item = window.prompt('What folder would you like to add?');
    this.setState({
      navItems: [...this.state.navItems, item]
    });
  };

  handleClickItem = (url) => {
    console.log(url);
    this.setState({
      selectedSrc: url
    })
  };

  handleClickBackground = () => {
    if (this.state.selectedSrc !== '') {
      this.setState({
        selectedSrc: ''
      });
    }
  };

  render() {
    const navIcons = this.state.navItems.map((iconLabel, index) => {
      return (
        <ContentNavIcon
          currentFolder={this.state.folder}
          handleClickFolder={this.handleClickFolder}
          index={index}
          key={index}
          label={iconLabel}
        />
      );
    });
    const classNames = (this.state.selectedSrc ? " selected" : "") + (this.props.username ? " signedin" : " signedout");
    return (
      <div
        className={"ContentPage--root-container" + classNames}
        onClick={this.handleClickBackground}
      >
        <ContentHeader
          username={this.props.username}
        />
        <nav className="ContentPage--nav">
          <ul className="ContentPage--nav-ul">
            {navIcons}
            <a className="ContentPage--add-folder" onClick={this.handleAddFolder}>Add Folder</a>
          </ul>
        </nav>
        <div className="ContentPage--label-area">
          <h3 className="ContentPage--content-label">
            Content
            <input text="text" className="ContentPage--search-area"></input>
          </h3>
        </div>
        <div className={"ContentPage--hero-image-container" + (this.state.selectedSrc ? " open" : " closed")}>
          <img className={"ContentPage--hero-image"} src={this.state.selectedSrc}></img>
        </div>
        <div className="ContentPage--content">
          {this.state.images}
        </div>
      </div>
    );
  }
}

export default ContentPage;
