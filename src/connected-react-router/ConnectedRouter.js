import React from "react";
import { Router } from "react-router";
import { LOCATION_CHANGE } from './constants';
import { Context } from '../react-redux';
export default class ConnectedRouter extends React.Component {
  static contextType = Context;
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.context.store.dispatch({
        type: LOCATION_CHANGE,
        payload: {
          location,
          action
        }
      });
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { children, history } = this.props;
    return <Router history={history}>{children}</Router>;
  }
}
