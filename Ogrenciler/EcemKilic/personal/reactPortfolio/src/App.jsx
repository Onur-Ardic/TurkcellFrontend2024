import React from 'react';
import Header  from './components/header/Header';
import Profile from './components/profile/Profile';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <section className="page">
          <Profile />
      </section>
      <Education />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;