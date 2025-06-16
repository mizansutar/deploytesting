import React from "react";
import Video from "../components/video/video";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../components/categoriesBar/categories";


export default function homeScreen() {
  return (
    <>
      <Container>
        <Categories />
        <Row>
          {[...new Array(2000)].map((video, i) => (
            <Col key={i} lg={3} md={4} sm={6}>
              <Video/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
