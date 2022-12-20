import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import CardDetail from "./components/CardDetail.jsx";
import Catalogue from "./components/Catalogue.jsx";
import AboutUs from "./components/AboutUs.jsx";
import CreateBook from "./components/CreateBook.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={ LandingPage } />
        <Route path={["/home", "/home/:id", "/catalogue", "/create", "/about"]} component={ NavBar } /> 
        <Route exact path="/home" component={ Home } />
        <Route path="/home/:id" component={ CardDetail } />
        <Route exact path="/catalogue" component={ Catalogue}/>
        <Route exact path="/about" component={ AboutUs}/>
        <Route exact path="/create" component={ CreateBook }/>
    </div>
  );
}

export default App;