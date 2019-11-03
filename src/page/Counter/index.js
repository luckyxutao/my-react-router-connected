import React from "react";
import * as actions from "./action";
import { bindActionCreators } from "../../redux";
import { connect } from "../../react-redux";
// import { connect } from "../../react-redux";
class Counter extends React.Component {
  constructor(props) {
    super(props)
    const { dispatch } = props
    // this.boundActionCreators = bindActionCreators(actions,dispatch);
  }
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
  },dispatch=>{
    return bindActionCreators(actions,dispatch);
  })(Counter);
