import { Container, ListGroup, Form } from "react-bootstrap";
import LabledInput from "./LabledInput";

export default function OrderList(){
  return (
            <Container className="orders-block">
                <Container className="orders-filter">

                    <h3 className="filter-label">Фильтры</h3>

                    <LabledInput id='search-order' className="search-input" labelTitle="Поиск" />
                    <Form.Select className="select-filter">
                        <option>Все</option>
                        <option value="1">Прогеры</option>
                        <option value="2">Дизайнеры</option>
                        <option value="3">Разнорабочии</option>
                    </Form.Select>
                    
                </Container>

                <Container className="orders-list">
                    <ListGroup defaultActiveKey="#link1">
                            
                    </ListGroup>
                </Container>
            </Container>
    );
  }