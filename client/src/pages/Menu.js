import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
// import Auth from "../utils/auth";
import '../components/menu/menu.css'

const menuItems = require("../components/menu/menu-items.json");

const Menu = () => {
  const [show, setShow] = useState(false)
  const [image, setImage] = useState() 
  // const token = Auth.loggedIn() ? Auth.getToken() : null;

  // if (!token) {
  //   return false;
  // }

  return (
    <>
      <h1 style={{textAlign: "center", paddingTop: "1%", paddingBottom: "1%"}}>Menu</h1>
      <Container style={{}}>
        <Row>
          <Col md={6}>
            {menuItems.map((item) => {
              return (
                <Card key={item.id} style={{marginBottom: "10px"}}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${item.price}
                    </Card.Subtitle>
                    <Card.Text><i>{item.description}</i></Card.Text>
                  </Card.Body>
                 <center>
                  <Button
                    className="primary"
                    onClick={() => {
                      setShow(true)
                      setImage(item.image)
                    }} 
                  >
                    View
                  </Button></center>
                </Card>
              );
            })}
          </Col>
   
          <Col md={6} style={{position: "fixed", right: "0px"}}>
          {
            show && 
            <Card style={{height: "500px", width: "500px" }}>
              <Card.Img src={image} style={{height: "100%", width: "100%" }}/>
              <Card.ImgOverlay>
                <button onClick={() => setShow(false)} style={{color: "purple", float: "right", margin: "25px", padding: "0px"}}><p style={{margin: "5px"}}>X</p></button>
              </Card.ImgOverlay>
            </Card>
          }
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Menu;
