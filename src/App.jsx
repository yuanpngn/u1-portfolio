import './App.css';
import { AdminProvider } from './common/AdminContext';
import AdminPanel from './common/AdminPanel';
import Navbar from './sections/Navbar/Navbar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Commonplace from './sections/Commonplace/Commonplace';
import ScrollProgress from './common/ScrollProgress';

function App() {
  return (
    <AdminProvider>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Commonplace />
      <Contact />
      <Footer />
      <AdminPanel />
    </AdminProvider>
  );
}

export default App;
