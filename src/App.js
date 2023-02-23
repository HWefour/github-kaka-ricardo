import logo from './logo.svg';
import './App.css';

import BasicExample from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImg from './background';
import Carousels from './carousel';
import RechercheFilm from './recherchefilm';

function App() {
  return (
    <div className="App">
      <BasicExample/>
      <BackgroundImg/>
      <Carousels/>
      <RechercheFilm/>

    </div>
  );
}

export default App;
