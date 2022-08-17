import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Resume />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
