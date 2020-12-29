import Header from './layout/Header'
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import {CssBaseline} from "@material-ui/core";

function App() {
  // console.log(process.env.REACT_APP_BASE_URL);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
