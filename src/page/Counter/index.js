import React from "react";
import { increment, decrement } from "./action";
import { connect } from "../../react-redux";
class Counter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.counterData.number}</p>
        <button onClick={()=>this.props.increment()}>增加1111</button>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      counterData: state.Counter
    };
  },
  () => {
    return {
      increment,
      decrement
    };
  }
)(Counter);
