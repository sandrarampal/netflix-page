import "./App.css";
import data from "./assets/data.json";
import logoNetflix from "./assets/netflix-logo.jpg";
import Section from "./components/Section";

function App() {
  return (
    <>
      <header>
        <div className="netflix-logo">
          <img src={logoNetflix} alt="" />
        </div>
      </header>
      <main>
        <Section />
      </main>
      ;
    </>
  );
}

export default App;
