import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { ReactReduxContext } from "./Context";
export default class Provider extends Component {
  // static propTypes = {
  //     store: PropTypes.shape({
  //       subscribe: PropTypes.func.isRequired,
  //       dispatch: PropTypes.func.isRequired,
  //       getState: PropTypes.func.isRequired
  //     }),
  //     children: PropTypes.any
  // }

  render() {
    return (
      <ReactReduxContext.Provider value={{ store: this.props.store }}>
        {this.props.children}
      </ReactReduxContext.Provider>
    );
  }
}
