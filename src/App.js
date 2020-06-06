import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import './App.css';

import Footer from './Components/Footer';

class App extends React.Component {

  constructor(props) { // constructor to get props
    super(props); // super in order to take in the props
    this.state = {  // state for top level things in website like title
      title: 'Vincent Nguyen',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Welcome',
        subTitle: 'Projects I am proud of',
        text: 'Take a look at my projects!'
      },
      about: {
        title: 'About Me'
      },
      resume: {
        title: 'Resume'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }

  render() { 
    return (
      <Router>
        <Container className="p=0" fluid={true}> 

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Vincent Nguyen</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/" exact render={() => <ResumePage title={this.state.resume.title} />} />
          <Route path="/" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
