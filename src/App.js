import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#My Projects">My Projects</a>
          <a href="#Contact Me">Contact Me</a>
          <a href="login_index.html" target="_blank">
            Login
          </a>
        </nav>
      </header>
      <div className="home" id="home">
        <div className="mypic">
          <img
            src="images/jeeva_new.png"
            alt="Jeevapriya"
            title="My pic"
            height="170"
            width="150"
          />
        </div>
        <div className="my_info">
          <h1>This is Jeevapriya R here,</h1>
          <blockquote>
            A dedicated and enthusiastic Information Technology student at
            Saveetha Engineering College.
            <br /> Currently in my pre-final year, I am passionate about
            exploring new technologies and developing innovative solutions.
            <br /> My academic journey has equipped me with a solid foundation
            in programming, web development,data structures and I am eager to
            apply these skills in real-world projects.
            <br />
            I'm indulged in learning new technologies and ideas where I love to
            implement in real-time problems in projects. I'm looking forward for
            many opportunities to showcase my skills.
            <br /> Here, I have showcased my skills through my projects.
            <br />
            <br />
            You can hire me or contact me via a mail. You can check out my
            resume by downloading it.
          </blockquote>

          <a
            href="mailto:jeevapriya1473@gmail.com?subject=Interested to hire you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              Hire me! <i className="fas fa-check"></i>
            </button>
          </a>
          <a href="resume/my_resume.pdf" download target="_blank">
            <button class="res_btn">
              Download my resume! <i class="fas fa-download"></i>
            </button>{" "}
          </a>
        </div>
      </div>
      <section id="about-me" className="about-me">
        <h1 className="heading">ABOUT ME</h1>
        <div className="about-me">
          <p>
            As I'm delving into my passion as a Software developer,
            <br />I love to work with on my full interest.
            <br /> I have done few major projects on my college days which are
            specified below.
            <br /> I'm keenly interested in AI development and Web development.
            <br /> I'm looking forward for opportunities to enhance my skills.
            <br /> I have participated in Smart India Hackathon, IBM Datathon
            and few inter-collegiate events.
            <br />
            You can contact me for further queries or details.
            <br />{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
