import Header from './layout/Header'
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import {CssBaseline} from "@material-ui/core";

function App() {
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
