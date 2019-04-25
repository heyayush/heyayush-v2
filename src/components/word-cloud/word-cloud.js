import React from 'react';

if (process.browser) {
  require('../../lib/tag-cloud');
}

class WordCloud extends React.Component {
  renderTagCloud() {
    if (process.browser) {
      try {
        TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#08fdd8',
          outlineColour: '#ff00ff',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05
        });
      } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
      }
    }
  }

  componentDidMount() {
    this.renderTagCloud();
  }

  componentWillUnmount() {}

  doNothing(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div id="myCanvasContainer" style={{ background: '#000' }}>
          <canvas width="600" height="600" id="myCanvas">
            <p>Anything in here will be replaced on browsers that do not support the canvas element</p>
          </canvas>
        </div>
        <div id="tags">
          <ul>
            <li>
              <a onClick={this.doNothing}>Python</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Javascript</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Typescript</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Angular</a>
            </li>
            <li>
              <a onClick={this.doNothing}>React</a>
            </li>
            <li>
              <a onClick={this.doNothing}>JQuery</a>
            </li>
            <li>
              <a onClick={this.doNothing}>CSS</a>
            </li>
            <li>
              <a onClick={this.doNothing}>HTML</a>
            </li>
            <li>
              <a onClick={this.doNothing}>GraphQL</a>
            </li>
            <li>
              <a onClick={this.doNothing}>REST</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Firebase</a>
            </li>
            <li>
              <a onClick={this.doNothing}>RxJS</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Material design</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Devops</a>
            </li>
            <li>
              <a onClick={this.doNothing}>NodeJS</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Mongo DB</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Cloud services</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Data Visualization</a>
            </li>
            <li>
              <a onClick={this.doNothing}>Progressive Web Apps</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default WordCloud;
