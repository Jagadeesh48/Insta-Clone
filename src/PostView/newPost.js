import React from "react";
import { Alert, Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";

const NewPost = () => {
  return (
    <>
      <Navigation />
      <Row className="d-flex justify-content-center align-items-center mx-0 py-5">
        <Col md={5} className="py-3">
          <Card className="shadow pt-4 px-2">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group as={Row} className="align-items-center">
                      <Col sm="10" className="pe-0">
                        <Form.Control
                          type="file"
                          id="post"
                          name="post"
                          className="d-none"
                        />
                        <Form.Label
                          column
                          sm="12"
                          className="browse-text "
                          htmlFor="post"
                        >
                          No file chosen
                        </Form.Label>
                      </Col>
                      <Form.Label column sm="2" className="ps-0" htmlFor="post">
                        <Alert variant="secondary" className="browse mb-0">
                          Browse
                        </Alert>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Author" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Location" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" placeholder="Description" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="d-flex justify-content-center">
                    <Button variant="outline-primary" className="px-5">
                      Post
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewPost;
