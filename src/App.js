import { Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import NavHeader from "./components/NavHeader";
import Photos from "./components/Photos";
import PhotoDetails from "./components/PhotoDetails";

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">What's up at NASA?</a>
        </h1>
        <About />
        <NavHeader />
      </header>
      <main>
        <Route path="/" exact component={Photos} />
        <Route path="/details" component={PhotoDetails} />
      </main>
    </>
  );
}

export default App;
