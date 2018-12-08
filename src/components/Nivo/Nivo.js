import React, { Component } from 'react';

export default class Nivo extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href="https://nivo.rocks/">Nivo</a>
        </h1>
        <iframe
          style={{ width: '100%', height: '100vh' }}
          title="nivoStorybook"
          src="https://nivo.rocks/storybook/?selectedKind=Bar&selectedStory=stacked&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"
          frameborder="0"
        />
      </div>
    );
  }
}
