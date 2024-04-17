import React from "react";
import TourCard from "../../shared/TourCard.jsx";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config.js";


const FeaturedTourList = ()  => {
    const {data: featuredTours} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)

    
    return <>
    { featuredTours?.map(tour =>(
            <Col lg='3' className="mb-4" key = {tour._id}><TourCard tour ={tour}/>
            </Col>
        ))
    }
    </>
}
export default FeaturedTourList ;