import Header from './components/Header.jsx';
import { LightboxProvider } from './components/Lightbox.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Education from './sections/Education.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Certificates from './sections/Certificates.jsx';
import Connections from './sections/Connections.jsx';
import Skills from './sections/Skills.jsx';
import Goal from './sections/Goal.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <LightboxProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Connections />
        <Skills />
        <Goal />
        <Contact />
      </main>
      <footer className="foot">
        <div className="wrap">
          <p>
            <strong>Carlos Vitor do Nascimento</strong> | Desenvolvendo soluções, conectando tecnologia e negócios.
          </p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </LightboxProvider>
  );
}
