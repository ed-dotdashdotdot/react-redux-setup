import React from "react";

import Counter1 from "../Counter1";
import Counter2 from "../Counter2";
import Footer from "../Footer";

import "./index.scss";

const App = () => {
  return (
    <div className="App">
      <Counter1 />
      <br />
      <hr />
      <Counter2 />
      <br />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
