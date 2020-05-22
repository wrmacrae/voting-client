import React from 'react';
import {fromJS} from 'immutable'

const pair = fromJS(['Frozen', 'Inside Out'])

export default class App extends React.PureComponent {
  render() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
};