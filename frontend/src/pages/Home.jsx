import React from "react";
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroVideo from '../assets/images/hero-video.mp4'
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import Comment from "../Components/Comment/Comment";
import FeaturedTourList from "../Components/FeaturedTour/FeaturedTourList";

const Home = ()  => {

    
    return <>
    
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">                            
                            <h1> Traveling opens the door to creating memories</h1>
                            <p>Discover the world with TourTravel! Our private tours offer you a unique and personalized experience in any destination.</p>
                        </div>
                        <SearchBar/>
                    </Col>
                    
                    <Col lg='2'>
                        <div className="hero__img">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>                   
                    
                </Row>
            </Container>
        </section>
        
        {/*===========================*/}

        <section>
            <Container>
                <Row>
                    <Col lg ='3'>
                        <h5 className="service__subtitle">What we serve</h5>
                        <h2 className="secvice__title"> We offer our best service</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        {/*===============ViewDetail============*/}

        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <h2 className="featured__tour-title">Featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h2 className="comment__title"> What our customer say about us
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <Comment/>
                    </Col>
                    

                </Row>
            </Container>
        </section>

    </>
}
export default Home;