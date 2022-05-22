// import logo from './logo.svg';
import './App.css';
// import Login from './Login';
// import Authentication from './Authentication';
import Navbar from './Navbar';
import Home from './Home';
import Upperbar from './Upperbar';
// import Like from './Like';
// import Chat from './Chat';
// import Profile from './Profile';

// import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      {/* <Authentication/> */}
      {/* <Login/> */}
      <Upperbar/>
      <Home/>
    </div>
    {/* <Router>
    <Switch>
        <Route exact path="/" component ={Home} ></Route>
        <Route exact path="/like" component={Like}></Route>
        <Route exact path="/chat" component={Chat}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </Router> */}
    <div>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
