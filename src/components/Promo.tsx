import React from 'react';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class Promo extends React.Component {
    render() {
        return (
            <section className="promo">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="title">
                                New Zeland
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export { Promo }