import "./App.css";
import data from "./assets/data.json";
import logoNetflix from "./assets/netflix-logo.jpg";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          {data.map((netflixObj, index) => {
            return <Section key={index} netflixObj={netflixObj} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
