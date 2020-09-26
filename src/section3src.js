// import React from "react";
// import Proptypes from "prop-types";

// class App extends React.Component {
//   state = {
//     count: 0,
//     movies: [],
//   };
//   add = () => {
//     this.setState((current) => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState((current) => ({ count: current.count - 1 }));
//   };
//   constructor(Props) {
//     super(Props);
//     console.log("component mounted");
//   }
//   componentDidUpdate() {
//     console.log("component did updated");
//   }
//   componentWillUnmount() {
//     console.log("component will unmount");
//   }
//   render() {
//     console.log("i rendered");
//     return (
//       <div>
//         <h1>Im a class component {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// export default App;
