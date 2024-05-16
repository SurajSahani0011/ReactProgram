import React from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
class App extends React.Component {

  render() {
    return (
      <>
        <ComponentA />
        <ComponentB />
      </>
    );
  }
}

export default App;
