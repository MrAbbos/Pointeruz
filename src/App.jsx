import { Route, Switch } from 'react-router-dom';
import './App.css';
import imageFull from './Components/Language/imageFull/imageFull';
import Language from './Components/Language/Language';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Registration from './Components/Registration/Home/Registration';
// import "swiper/css/bundle";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/news" >
        <News/>
      </Route>
      <Route component={Language} path="/ProgLanguage" />
      <Route component={Registration} path="/Register" />
      </Switch>
    </div>
  );
}

export default App;
