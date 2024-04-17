import React from "react";
import './footer.css'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from "../../assets/images/logo.jpg"
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const nav__links=[
    {
        path:'/home',
        display:'Home'
    },
    
    {
        path:'/tours',
        display:'Tours'
    },

]

const quick__links=[
    {
        path:'/login',
        display:'Login'
    },
    
    {
        path:'/register',
        display:'Register'
    },

]

const Footer = ()  => {
    return<>
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src= {logo} alt="" /> 
                                                    
                        </div>

                    </Col>
                    <Col lg='3' className="middle1">
                        <h5 className="footer__link-title">Discovery</h5>
                        
                        <div className="footer__quick-links">
                            {
                                nav__links.map((item,index) =>(
                                    <div key ={index} className="ps-0 mb-2 border-0">
                                        <Link to ={item.path}>{item.display}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>

                    <Col lg='3' className="middle2">
                    <h5 className="footer__link-title">Items</h5>
                        
                        <div className="footer__quick-links ">
                            {
                                quick__links.map((item,index) =>(
                                    <div key ={index} className="ps-0 mb-2 border-0">
                                        <Link to ={item.path}>{item.display}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>

                    <Col lg='3' className="contact">
                    <h5 className="footer__title mb-3">Contact</h5>
                        
                    <div className="footer__contact">                            
                               
                                    <div className="ps-0 mb-2 border-0 d-flex align-items-center gap-2">
                                        <h6 className="mb-0 d-flex align-items-center gap-2">
                                            <FaPhoneAlt/>
                                            Phone:
                                        </h6>
                                        <p className="mb-0">0322222222</p>                                     
                                        
                                    </div>

                                    <div className="ps-0 mb-2 border-0 d-flex align-items-center gap-2">
                                        <h6 className="mb-0 d-flex align-items-center gap-2">
                                            <FaLocationDot/>
                                            Address:
                                        </h6>
                                        <p className="mb-0">Dict.3, HCM city</p>                                     
                                        
                                    </div>

                                    <div className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <h6 className="mb-0 d-flex align-items-center gap-2">
                                            <MdEmail/>
                                            Email: 
                                        </h6>
                                        <p className="mb-0">huy@st.ueh.edu.vn</p>                                     
                                        
                                    </div>                                
                            
                        </div>
                    </Col>
                    
                </Row>
            </Container>

        </footer>
    </>
}
export default Footer;