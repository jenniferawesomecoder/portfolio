import React from 'react';
import { withRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideBar from './components/Sidebar';
import './App.css';

class App extends React.Component {

  componentDidMount = () => {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="app">
        <div id="outer-container">
          <Header />
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
        <div id="home"></div>
        <Landing />
        <div id="about"></div>
        <About />
        <div className="parallax">
          <h2>Check Out Some Recent Projects Below!</h2>
        </div>
        <div id="projects"></div>
        <Projects />
        <div className="parallax-two">
          <h2>Hope you enjoyed! Please leave a note below :)</h2>
        </div>
        <div id="contact"></div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
