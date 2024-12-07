import "../styles/resumesPage.css"

import { Button, Container, Form, Image, ListGroup } from "react-bootstrap";
import demo from "../images/backgrounds/lev.jpg"

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
              <ListGroup.Item>
                <Container className="list-item-container">
                  <Image  className="photo" rounded  src={demo}></Image>
                  <Container className="resume-info">
                    <h3>Никита</h3>
                    <p>Люблю кушать пиццуЛюблю кушать пиццуЛюблю кушать пиццуЛюблю кушать пиццуЛюблю кушать пиццу</p>
                    <Button>Просмотреть</Button>
                  </Container>
                </Container>
              </ListGroup.Item> 
              
            </ListGroup>
            </Container>
          </Container>
        </div>
    );
  }