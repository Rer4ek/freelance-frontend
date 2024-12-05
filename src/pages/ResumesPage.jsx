import "../styles/resumesPage.css"

import { Container, Form, ListGroup } from "react-bootstrap";

export default function ResumesPage(){
    return (
        <div id="wrapper">
          <Container className="resumes">
            <Container className="filters">
              <p>Фильтры</p>
              <Form>
                <Form.Group>
                  <Form.Label className="labels">Имя</Form.Label>
                  <Form.Control placeholder="Александр"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="labels">Спецульность</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Все</option>
                    <option value="2">Програмысты</option>
                    <option value="3">Дизайнеры</option>
                    <option value="3">Разнорабочии</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="labels">Теги (через запятую)</Form.Label>
                  <Form.Control placeholder="C#, СШар"/>
                </Form.Group>
              </Form>
            </Container>
            <Container className="list">
              <ListGroup>
                Ку 
              </ListGroup>
              <ListGroup>
                Ку 
              </ListGroup>
              <ListGroup>
                Ку 
              </ListGroup>
              <ListGroup>
                Ку 
              </ListGroup>
            </Container>
          </Container>
        </div>
    );
  }