import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paralax from "./components/Paralax/Paralax";

const App = () => {
  return (
    <>
      <Paralax />

      <header>
        <section id="Home">
          <Navbar />
          <div className="container">
            <Header />
          </div>
        </section>
      </header>
      <main>
        <section id="Me" className="container">
          <AboutMe />
        </section>
        <section id="Knowledge">
          <div className="container">What I know</div>
        </section>
        <section id="Projects">
          <div className="container">What I did</div>
        </section>
        <section id="About">
          <div className="container">About Me</div>
        </section>
      </main>
      <section id="Contacts">
        <div className="container">Contacts</div>
      </section>
    </>
  );
};

export default App;
