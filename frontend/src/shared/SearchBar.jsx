import React, {useRef} from "react";
import './searchbar.css';
import {Col, Form, FormGroup} from 'reactstrap';
import { BASE_URL } from "../utils/config";
import {useNavigate} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";

const SearchBar = ()  => {

    const locationRef = useRef('');
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate()

    const searchHandler = async()=>{
        const location = locationRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location ==='' ||  maxGroupSize ===''){
        return alert('Failed to search, try again');}

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxGroupSize}`)

    if (!res.ok) alert ('Something went wrong');
    const result = await res.json();

    navigate(`/tours/search?city=${location}&&maxGroupSize=${maxGroupSize}`, {state: result.data})
    }

    

    

    return(
        <Col lg = '12'>
            <div className="search__bar">
                <Form className="search__content d-flex align-items gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast ">
                        <HiLocationMarker className="search__location__icon"/>
                        <div>
                            <h6>
                                Location
                            </h6>
                            <input type='text' placeholder ="City" ref = {locationRef}/>
                            
                        </div>
                    </FormGroup>                    

                    <FormGroup className="d-flex gap-3 form__group form__group-fast right">
                        <IoPersonCircle className="search__maxpeople__icon"/>
                        <div className="form__maxpeople">
                            <h6>
                                Max people
                            </h6>
                            <input type='number' min='1' placeholder="0" ref={maxGroupSizeRef}/>
                            
                        </div>
                    </FormGroup>                    
                       
                       <div className="search__icon" type='submit' onClick={searchHandler}>
                        <FaSearch/>
                        </div>                                                             

                </Form>
               
            </div>
        </Col>
    )
}

   

export default SearchBar ;