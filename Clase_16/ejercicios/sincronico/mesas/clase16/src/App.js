import logo from './logo.svg';
import './App.css';
import CatScreen from './componentes/CatScreen';
import DogScreen from './componentes/DogScreen';
import HomeScreen from './componentes/HomeScreen';

import {Router, Route, browserHistory } from 'react-router-3'

function App() {
  return (
    <div className="App">

      <Router history={browserHistory }>
        <Route path="/" component={HomeScreen}>
          <Route path="/cat" component={CatScreen}></Route>
          <Route path="/dog" component={DogScreen}></Route>
        </Route>
      </Router>
      
      
    </div>
  );
}

export default App;
