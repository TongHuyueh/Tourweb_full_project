import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from 'reactstrap'

// ======== insert img==============

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData=[
    {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: '.................',
    },

    {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: '.................',
    },

    {
    imgUrl: customizationImg,
    title: "Customization",
    desc: '.................',
    },

    
]

const ServiceList = ()  => {
    return <>
    {
        serviceData.map((item,index) => (
        <Col lg='3' key = {index}>
            <ServiceCard item = {item} />
        </Col>))
    }
    </>
        
    
}
export default ServiceList;