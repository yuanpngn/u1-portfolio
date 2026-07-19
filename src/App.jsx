import './App.css';
import { AdminProvider } from './common/AdminContext';
import AdminPanel from './common/AdminPanel';
import Decor from './common/Decor';
import Navbar from './sections/Navbar/Navbar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Achievements from './sections/Achievements/Achievements';
import Commonplace from './sections/Commonplace/Commonplace';
import ScrollProgress from './common/ScrollProgress';

function App() {
  return (
    <AdminProvider>
      <Decor />
      <ScrollProgress />
      <Navbar />
      <main id="main" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Commonplace />
        <Contact />
      </main>
      <Footer />
      <AdminPanel />
    </AdminProvider>
  );
}

export default App;
