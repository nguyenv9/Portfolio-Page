import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {
    
    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children} 
                    {/* // When using the Content tag, then whatever is passed in between the tags will be rendered */}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;