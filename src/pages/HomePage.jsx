import "../styles/background.css"
import "../styles/homePage.css"

import { Container } from "react-bootstrap";
import CardCarousel from "../components/CardCarousel";
import WorkerCard from "../components/WorkerCard";
import Marquee from "react-fast-marquee";
import SimpleCard from "../components/SimpleCard";

export default function HomePage(){
    return (
        <div id="wrapper">

            <div className="home-background">
                <Container className="background-container">
                    <h2 className="home-title">
                        Мы предоставляем работу для безработных и работных
                    </h2>

                    <p className="count-vacants">
                        15 резюме и 15 заказов доступно
                    </p>
                </Container>
            </div>

            <Marquee className="marquee-home" autoFill>
                <div className="marquee-block">Семья</div>
                <div className="marquee-block">Работа</div>
                <div className="marquee-block">Опыт</div>
                <div className="marquee-block">Братья</div>
            </Marquee>

            <Container className="container-home">
                <div className="best-workers-block">
                <CardCarousel cardClassName="worker-card" className="card-carousel" titleClassName="carousel-title" title="Топ">
                    <WorkerCard cardText="Мастер сброса сметаны"
                                cardTitle="Вадим" src="/src/assets/vadim.jpg"
                                rating="99" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>
                    
                    <WorkerCard cardText="Гей мастер"
                                cardTitle="Антон" src="/src/assets/anton.jpg"
                                rating="2" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>

                    <WorkerCard cardText="Аниме"
                                cardTitle="Аниме Кароль" src="/src/assets/pasha.jpg"
                                rating="228" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>

                </CardCarousel>
                <CardCarousel cardClassName="worker-card" className="card-carousel" titleClassName="carousel-title" title="Топ">
                    <WorkerCard cardText="Мастер сброса сметаны"
                                cardTitle="Вадим" src="/src/assets/vadim.jpg"
                                rating="99" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>
                    
                    <WorkerCard cardText="Гей мастер"
                                cardTitle="Антон" src="/src/assets/anton.jpg"
                                rating="2" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>

                    <WorkerCard cardText="Аниме"
                                cardTitle="Аниме Кароль" src="/src/assets/pasha.jpg"
                                rating="228" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>

                </CardCarousel>
                <CardCarousel cardClassName="worker-card" className="card-carousel" titleClassName="carousel-title" title="Топ">
                    <WorkerCard cardText="Мастер сброса сметаны"
                                cardTitle="Вадим" src="/src/assets/vadim.jpg"
                                rating="99" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>
                    
                    <WorkerCard cardText="Гей мастер"
                                cardTitle="Антон" src="/src/assets/anton.jpg"
                                rating="2" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>

                    <WorkerCard cardText="Аниме"
                                cardTitle="Аниме Кароль" src="/src/assets/pasha.jpg"
                                rating="228" ratingIcon={<i className='bx bxs-star'></i>}>        
                    </WorkerCard>

                </CardCarousel>
                </div>

                <div className="orders">
                    <div className="orders-for-worker">
                        <h3>
                            Для исполнителей
                        </h3>
                        <div className="work-card">

                            <SimpleCard>
                                Программист
                            </SimpleCard>

                            <SimpleCard color="#3CB371">
                                Дизайнер
                            </SimpleCard>

                            <SimpleCard color="#FFE4B5">
                                Разнорабочий
                            </SimpleCard>

                        </div>
                    </div>

                    <div className="orders-for-employer">
                        <h3>
                            Для работадатлей
                        </h3>
                        <div className="work-card">

                            <SimpleCard>
                                Программист
                            </SimpleCard>

                            <SimpleCard color="#3CB371">
                                Дизайнер
                            </SimpleCard>

                            <SimpleCard color="#FFE4B5">
                                Разнорабочий
                            </SimpleCard>

                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
  }