import React from "react";
import{Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import './tourcard.css';

const TourCard = ({tour})  => {

    const {_id, title, departure, city, photo, price} = tour

    return(
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <img src={photo} alt="tour-img" />
                    
                </div>

                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="tour__location d-flex align-items-center gap-1">
                        <i class="ri-flight-takeoff-line"></i> {departure}
                        </span>                   

                    </div>
                    <h5 className="tour__title"><Link to={`/tours/${_id}`} >{title}, {city}</Link></h5>

                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>${price} <span>/person</span></h5>
                        <button className="btn booking__btn">
                        <Link to={`/tours/${_id}`}>Book now</Link>
                        
                        </button>

                    </div>
                </CardBody>
            </Card>

            
        </div>
    )
}
export default TourCard ;