import Header from "./components/header";
import Hero from "./components/hero";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Work />
      <Contact/>

    </div>
  );
}

export default App;
