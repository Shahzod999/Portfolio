import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paralax from "./components/Paralax/Paralax";

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <section id="Home">
          <Navbar />
          <div className="container">
            <Header />
          </div>
        </section>
      </header>

      <section id="Me">
        <Paralax />
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
      <section id="Contacts">
        <div className="container">Contacts</div>
      </section>
    </div>
  );
};

export default App;
