import {BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';

function App() {

  return (
      <BrowserRouter>
        {routes.map((item, index) => (
                <Route {...item} key={index}/>
            ),
        )}
      </BrowserRouter>
  );
}

export default App;
