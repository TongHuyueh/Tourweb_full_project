import React from "react";
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/thankyou.css'

const  ThankYou = ()  => {
    
    return( 
    <section>
        <Container>
            <Row>
                <Col lg='12' className=" text-center">
                    <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className="mb-3 fw-semibold">Thank You</h1>
                        <h3 className="mb-4">Your tour is booked, we will contact you as soon as possible</h3>

                        <Button className="btn w-25"><Link className="btn__return" to ='/home'>Back to Home</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
export default ThankYou;