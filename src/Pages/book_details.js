import React from "react"; 
import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
 
const BookDetails = () => { 
  return ( 
    <> 
    <Container className="mt-5"> 
      <Row> 
        <Col md={4}> 
          <img 
            src="https://s1.adlibris.com/images/62648499/babbel-over-nilen.jpg" 
            alt="Book" 
          /> 
        </Col> 
        <Col md={8}> 
          <h2>Babbel över Nilen - Häftad, Svenska, 2022</h2> 
          <h4>Författare: Naguib Mahfouz</h4> 
          <hr /> 
          <div className="d-flex align-items-center"> 
            <span><FontAwesomeIcon icon={faHeart}/> Spara till önskelista</span> 
          </div> 
          <hr /> 
          <Tab.Container defaultActiveKey="description"> 
            <Nav variant="tabs"> 
              <Nav.Item> 
                <Nav.Link eventKey="description">Beskrivning</Nav.Link> 
              </Nav.Item> 
              <Nav.Item> 
                <Nav.Link eventKey="productInfo">Produktinfo</Nav.Link> 
              </Nav.Item> 
            </Nav> 
            <Tab.Content className="mt-3"> 
              <Tab.Pane eventKey="description"> 
                <p> 
                  Babbel Över Nilen, en roman av den egyptiske författaren och 
                  Nobelprisvinnare i litteratur Naguib Mahfouz som visades 
                  filmiskt i en långfilm. Romanen väckte ilska hos den dåvarande 
                  regimen och fick honom nästan att fängslas. 
                </p> 
                <p> 
                  Romanen diskuterar de intellektuellas idéer och deras 
                  smärtsamma verklighet och smärtsamma verklighet, och ger oss 
                  exempel på deras idéer som de varit upptagna av under lång 
                  tid. Det är en roman som kombinerar negativ och positiv kritik 
                  av en situation som försöka åter upprätta livet för 
                  intellektuella som förstörts, till att visa vilken makt de har 
                  över politiker och samhälle. 
                </p> 
              </Tab.Pane> 
              <Tab.Pane eventKey="productInfo"> 
                <Row> 
                  <Col md={6}> 
                    <ul> 
                      <li>Författare: Naguib Mahfouz</li> 
                      <li>Översättare: Camiel Al-Sabitti</li> 
                      <li>Upplaga: 1</li> 
                      <li>ISBN: 9789151972800</li> 
                      <li>Språk: Svenska</li> 
                    </ul> 
                  </Col> 
                  <Col md={6}> 
                    <ul> 
                      <li>Vikt: 192 gram</li> 
                      <li>Utgiven: 2022-01-22</li> 
                      <li>Förlag: Como förlag</li> 
                      <li>Antal sidor: 158</li> 
                    </ul> 
                  </Col> 
                </Row> 
              </Tab.Pane> 
            </Tab.Content> 
          </Tab.Container> 
        </Col> 
      </Row> 
    </Container> 
    </> 
  ); 
}; 
 
export default BookDetails;