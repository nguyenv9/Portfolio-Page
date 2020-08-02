import React from 'react';
import ReactDOM  from  'react-dom';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-between" md={3} sm={12} >
                        This site was made by Vincent Nguyen.
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                        <div className= "social-container">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vincenttnguyen/" className="linkedin social" >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/backoffvincent/" className="facebook social" >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nguyenv9" className="github social" >
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/iitsvincent/" className="instagram social" >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/iitsvincent" className="twitter social" >
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;