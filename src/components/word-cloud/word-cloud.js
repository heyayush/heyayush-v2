import React from 'react';
import '../../lib/tag-cloud';

class WordCloud extends React.Component {
  renderTagCloud() {
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

  componentDidMount() {
    this.renderTagCloud();
  }

  componentWillUnmount() {}

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
              <a href="/">Python</a>
            </li>
            <li>
              <a href="/">Javascript</a>
            </li>
            <li>
              <a href="/">Typescript</a>
            </li>
            <li>
              <a href="/">Angular</a>
            </li>
            <li>
              <a href="/">React</a>
            </li>
            <li>
              <a href="/">JQuery</a>
            </li>
            <li>
              <a href="/">CSS</a>
            </li>
            <li>
              <a href="/">HTML</a>
            </li>
            <li>
              <a href="/">GraphQL</a>
            </li>
            <li>
              <a href="/">REST</a>
            </li>
            <li>
              <a href="/">Firebase</a>
            </li>
            <li>
              <a href="/">RxJS</a>
            </li>
            <li>
              <a href="/">Material design</a>
            </li>
            <li>
              <a href="/">Devops</a>
            </li>
            <li>
              <a href="/">NodeJS</a>
            </li>
            <li>
              <a href="/">Mongo DB</a>
            </li>
            <li>
              <a href="/">Cloud services</a>
            </li>
            <li>
              <a href="/">Data Visualization</a>
            </li>
            <li>
              <a href="/">Progressive Web Apps</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default WordCloud;
