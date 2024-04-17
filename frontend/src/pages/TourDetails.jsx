import React from "react";
import '../styles/tourdetail.css'
import {Container, Row, Col} from 'reactstrap'
import { useParams } from "react-router-dom";
import Booking from '../Components/Booking/Booking'
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";

const TourDetails = ()  => {

    const {id} = useParams();
    
    const{data:tour} = useFetch(`${BASE_URL}/tours/${id}`)   

    const { title, city, departure, photo, maxGroupSize, desc, day, night } = tour 

   
    return(
        <>
        <section>
            <Container>
                <Row>
                    <Col lg = '8'>
                        <div className="tour__content">
                            <img src={photo} alt="" />

                            <div className="tour__info">
                                <h2>{title}, {city}</h2>

                                <div className="d-flex align-items-center gap-5">
                                    <span>
                                    <i class="ri-flight-takeoff-line"></i> {departure}
                                    </span>
                                </div>

                                <div className="tour__extra-details">                                    
                                    <span><i class="ri-map-pin-time-fill"></i> {day} day/{night} night</span>  
                                    <span><i class="ri-group-fill"></i> {maxGroupSize} people</span>                                 
                                </div>
                                <h5>Description</h5>
                                <p>{desc}</p>

                            </div>
                        </div>
                    </Col>

                    <Col lg='4'>
                        <Booking tour={tour} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default TourDetails ;