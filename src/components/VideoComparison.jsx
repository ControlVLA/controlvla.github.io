import React from 'react';

export default class VideoComparison extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          {this.props.videos.map((video, idx) => (
            <div key={`video-${idx}`}>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <video
                    className="uk-width-1-1"
                    controls
                    playsInline
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">{video.title}</h3>
                  <p className="uk-text-small">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
