import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';
import SkillShowcase from './components/SkillShowcase';
import ProjectShowcase from './components/ProjectShowcase';
import CodeProjectShowcase from './components/CodeProjectShowcase';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <hr />
      <AboutMe />
      <hr />
      <ProjectShowcase />
      <hr />
      <CodeProjectShowcase />
      <hr />
      <SkillShowcase />
      <hr />
      <Contact/>
      <hr />

      <Footer />
    </div>
  );
}

export default App;
