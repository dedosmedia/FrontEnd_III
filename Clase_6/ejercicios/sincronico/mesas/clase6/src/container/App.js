import '../styles/App.css';

import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';


function App() {
  return (
      <div className="App">
        
        <h3>Invitados:</h3>
        <ClassComponent />
        <h3>Tareas: </h3>
        <FunctionComponent />


      </div>
  );
}

export default App;
