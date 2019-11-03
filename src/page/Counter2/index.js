import React from "react";
import * as actions from "./action";
import { bindActionCreators } from "../../redux";
import { connect } from "../../react-redux";
import { push } from "../../connected-react-router";
class Counter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ backgroundColor: "pink" }}>
        <p>{this.props.counterData.number}</p>
        <button
          onClick={() => {
            this.props.increment();
            this.props.push("/counter");
          }}
        >
          增加2222
        </button>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      counterData: state.Counter2
    };
  },
  dispatch => {
    return bindActionCreators({...actions,push}, dispatch);
  }
)(Counter);
