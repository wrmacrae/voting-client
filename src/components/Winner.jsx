import React from 'react';

export default class Winner extends React.PureComponent {
  mixins: [PureRenderMixin]
  render() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
}
