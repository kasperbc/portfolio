import './styles.css';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';
import SkillShowcase from './components/SkillShowcase';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <SkillShowcase />
      <Footer />
    </div>
  );
}

export default App;
