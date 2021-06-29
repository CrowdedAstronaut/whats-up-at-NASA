import { Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import NavHeader from "./components/NavHeader";
import Photos from "./components/Photos";
import PhotoDetails from "./components/PhotoDetails";
import ReactPlayer from "react-player";

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">What's up at NASA?</a>
        </h1>
        {/* <NavHeader /> */}
        {/* <ReactPlayer url="" /> */}
      </header>
      <main>
        <Route path="/" exact component={Photos} />
        <Route path="/details/:date" component={PhotoDetails} />
        <NavLink to="/about" component={About} />
      </main>
    </>
  );
}

export default App;
