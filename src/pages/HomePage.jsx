import Marquee from "react-fast-marquee";
import "../styles/background.css"
import "../styles/homePage.css"

import { Container, Carousel, Card } from "react-bootstrap";
import { useState } from "react";
import ava from "../assets/ava.jpg"

export default function HomePage(){

    const [indexBestProgrammer, setIndexBestProgrammer] = useState(0);
    const [indexBestDesigner, setIndexBestDesigner] = useState(0);
    const [indexBestHandyman, setIndexBestHandyman] = useState(0);

    const handleSelectProgrammer = (selectedIndex) => {
        setIndexBestProgrammer(selectedIndex);
    };

    const handleSelectDesigner = (selectedIndex) => {
        setIndexBestDesigner(selectedIndex);
    };

    const handleSelectHandyman = (selectedIndex) => {
        setIndexBestHandyman(selectedIndex);
    };

    return (
        <div id="wrapper">

            <Marquee className="marquee-home" autoFill>
                <div className="marquee-block">Семья</div>
                <div className="marquee-block">Работа</div>
                <div className="marquee-block">Опыт</div>
                <div className="marquee-block">Братья</div>
            </Marquee>

            <Container className="container-home">
                
                <div>
                <Carousel slide={false} className="carousel-dark best-workers-carousel" activeIndex={indexBestProgrammer} onSelect={handleSelectProgrammer}>
                    <Carousel.Item>
                        <div>
                            <Card className="best-worker-card" style={{ width: '18rem' }}>
                                <Card.Img className="best-worker-image" variant="top" src={ava} />
                                <Card.Body>
                                    <Card.Title>Володя</Card.Title>
                                    <Card.Text>
                                    Мастер пикапа
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">9,5 <i className="bx bx-star" />/ 10 <i className="bx bx-star" /> </Card.Footer>
                            </Card>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>
                            <Card className="best-worker-card" style={{ width: '18rem' }}>
                                <Card.Img className="best-worker-image" variant="top" src={ava} />
                                <Card.Body>
                                    <Card.Title>Вадим</Card.Title>
                                    <Card.Text>
                                    Мастер сброса сметаны
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">4,5 <i className="bx bx-star" />/ 10 <i className="bx bx-star" /> </Card.Footer>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>

                    <Carousel slide={false} className="carousel-dark best-workers-carousel" activeIndex={indexBestDesigner} onSelect={handleSelectDesigner}>
                    <Carousel.Item>
                        <div>
                            <Card className="best-worker-card" style={{ width: '18rem' }}>
                                <Card.Img className="best-worker-image" variant="top" src={ava} />
                                <Card.Body>
                                    <Card.Title>Володя</Card.Title>
                                    <Card.Text>
                                    Мастер пикапа
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">9,5 <i className="bx bx-star" />/ 10 <i className="bx bx-star" /> </Card.Footer>
                            </Card>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>
                            <Card className="best-worker-card" style={{ width: '18rem' }}>
                                <Card.Img className="best-worker-image" variant="top" src={ava} />
                                <Card.Body>
                                    <Card.Title>Вадим</Card.Title>
                                    <Card.Text>
                                    Мастер сброса сметаны
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">4,5 <i className="bx bx-star" />/ 10 <i className="bx bx-star" /> </Card.Footer>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>


                <Carousel slide={false} className="carousel-dark best-workers-carousel" activeIndex={indexBestHandyman} onSelect={handleSelectHandyman}>
                    <Carousel.Item>
                        <div>
                            <Card className="best-worker-card" style={{ width: '18rem' }}>
                                <Card.Img className="best-worker-image" variant="top" src={ava} />
                                <Card.Body>
                                    <Card.Title>Володя</Card.Title>
                                    <Card.Text>
                                    Мастер пикапа
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">9,5 <i className="bx bx-star" />/ 10 <i className="bx bx-star" /> </Card.Footer>
                            </Card>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>
                            <Card className="best-worker-card" style={{ width: '18rem' }}>
                                <Card.Img className="best-worker-image" variant="top" src={ava} />
                                <Card.Body>
                                    <Card.Title>Вадим</Card.Title>
                                    <Card.Text>
                                    Мастер сброса сметаны
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">4,5 <i className="bx bx-star" />/ 10 <i className="bx bx-star" /> </Card.Footer>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>
                </div>
            </Container>
        </div>
    );
  }