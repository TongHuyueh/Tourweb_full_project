import React , {useContext, useRef}from "react";
import {Container, Row, Button} from 'reactstrap';
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from '../../assets/images/logo.png';
import './header.css';
import {AuthContext} from './../../context/AuthContext'
import { IoMenu } from "react-icons/io5";

const Header = ()  => {  

    const navigate = useNavigate();
    const menuRef = useRef(null);
    const {user, dispatch} = useContext(AuthContext);

    const logout = () =>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }   
    
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu') 
    
    
  
    return <header className="header">
        <Container>
            <Row>
                
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div> 
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu d-flex align-items-center gap-5">
                             <>
                                 
                                <li className="nav__item">
                                    <NavLink to="/home" className="nav__link">Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/tours" className="nav__link">Tours</NavLink>
                                </li>
                                
                                
                                
                            </>
                            
                            </ul>
                                          
                     </div>
                    

                    <div className="nav__right d-flex align-items-center gap-4">
                        <div className="nav__btns d-flex align-items-center gap-4">

                            {
                                user?( <>
                                <h5 className="mb-0">{user.username}</h5>
                                <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                                </>
                                ) : (
                                    <>
                                    <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                                    <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>
                                    </>
                                )
                            }
                            
                        </div>
                        <span className="mobile__menu" onClick={toggleMenu}>
                        <IoMenu/>
                        </span>
                    </div>

                
                </div>
            </Row>
        </Container>
    </header>
}

export default Header;

