import './home.css';
import Header from '../components/Header';
import Cover from '../components/Cover';
import SkillShowcase from '../components/SkillShowcase';
import ProjectShowcase from '../components/ProjectShowcase';
import CodeProjectShowcase from '../components/CodeProjectShowcase';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import ProjectPage from '../components/ProjectPage';
import { Button } from '@mui/joy';

function Home() {
  return (
    <div className="Page">
      <Header />
      <Cover />
      <hr id="aboutme"/>
      <AboutMe />
      <hr id="gameprojects"/>
      <ProjectShowcase />
      <hr id="codeprojects"/>
      <CodeProjectShowcase />
      <hr id="skills"/>
      <SkillShowcase />
      <hr id="contact"/>
      <Contact/>
      <hr />
    </div>
  );
}

export default Home;
