import React, {useState, useContext} from "react";
import './booking.css';
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import {BASE_URL} from "../../utils/config"




const Booking = ({tour})  => {

    const {title, price, maxGroupSize} = tour
    console.log(tour)
    const navigate = useNavigate()
   
    const {user} = useContext(AuthContext)
        
    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,        
        fullName:'',
        phone:'',
        guestSize: '',
        bookAt:'',
        tourName: "" ,
        totalPrice: 0
    })
        
    
    const handleChange = e => {
        const {id, value} = e.target;        
        setBooking(prev => ({
            ...prev,
            [id]: value,
            totalPrice: Number(value) * price, 
            tourName: title,
        }));

       
    };

    const totalAmount = Number(price) * Number(booking.guestSize) ;

    // send data to the server
    const handleClick = async e =>{
        e.preventDefault();       

        try{
            if(!user || user === undefined || user === null){
                return alert('Please Login');
            }       
            
           
                const res = await fetch(`${BASE_URL}/booking`,{
                    method: 'post',                  
                    headers:{
                        'content-type':'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify(booking),
                });
                
                const result = await res.json()
                

            if (!res.ok){
                return alert(result.message);
            }
            navigate('/thank-you');
          

        }catch(err){
            alert (err.message);    

        }        
       

    }
    
    return(<>
        
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>/person</span></h3>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' placeholder="FullName" id="fullName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='tel' placeholder="Phone" id="phone"  required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-item-center gap-3">
                        <input type='date' placeholder="" id="bookAt" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' min ="1" max ={maxGroupSize} placeholder="Guest" id="guestSize" required onChange={handleChange} />
                    </FormGroup>

                </Form>

            </div>
            <div className="booking__bottom">
              <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"></i> 1 person</h5>
                    <span>${price}</span>
                </ListGroupItem>
                
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
              </ListGroup>

              <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
            </div>
        </div>

        
    </>)
}
export default Booking;