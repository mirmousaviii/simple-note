import Header from './layout/Header'
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import {CssBaseline} from "@material-ui/core";
import Notification from "./component/Notification";
import Loading from "./component/Loading";
import React from "react";

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Main />
      <Notification />
      <Loading />
      <Footer />
    </div>
  );
}

export default App;
