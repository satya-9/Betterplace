import React from "react";
import Drop from "./Drop";
class App extends React.Component {
  constructor() {
    super();
    this.state = { prevdisabled: true, nextdisabled: false };
  }
  render() {
    return (
      <div>
        <Drop />
      </div>
    );
  }
}
export default App;
