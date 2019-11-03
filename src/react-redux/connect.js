import React from "react";
import { bindActionCreators } from "../redux";
// import { bindActionCreators } from "../redux";
import { ReactReduxContext } from "./Context";

export default function(mapStateProps, mapDispatchToProps) {
  return function wrapWithConnect(WrappedComponent) {
    return class extends React.Component {
      state = mapStateProps(this.context.store.getState());
      static contextType = ReactReduxContext;
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => {
          this.setState(mapStateProps(this.context.store.getState()));
        });
      }
      //   shouldComponentUpdate() {
      //     if (this.state === mapStateProps(this.context.store.getState())) {
      //       return false;
      //     }
      //     return true;
      //   }
      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const boundedActionCreators = bindActionCreators(
          mapDispatchToProps(),
          this.context.store.dispatch
        );
        // {
        //     aaa : function(){
        //         return { type:'xxx'}
        //     }
        // }
        return <WrappedComponent {...this.state} {...boundedActionCreators} />;
      }
    };
  };
}
