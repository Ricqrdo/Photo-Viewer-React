import React from "react";
import "bootswatch/dist/cyborg/bootstrap.min.css";

import Header from "../components/Header";
import ItemsContainer from "../components/ItemsContainer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ItemsContainer />
      </React.Fragment>
    );
  }
}

export default App;
