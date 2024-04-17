import React from "react";
import Slider from 'react-slick';


import ava01 from '../../assets/images/ava-1.png';
import ava02 from '../../assets/images/ava-2.png';
import ava03 from '../../assets/images/ava-3.png';
import ava04 from '../../assets/images/ava-4.png';

const Comment = ()  => {

    const settings ={
        dots: true,
        infinite: false,       
        speed: 1000,
        slidesToShow: 3,
        
        responsive: [
            {
              breakpoint: 756,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,                
              }
            },            
          ]
        
  };
                  
        
    
    return <Slider {...settings}>  
           
        <div className="comment py-4 px-3">
            <p>
             "This office is very responsible and take care about tourists.
             It was great trip. This trip was authentic and very good organized. 
             I enjoyed to be here and to have such a good guide. Thank you TourTravel."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=" "/>
                <div>
                    <h6 className="mb-0 mt-3"> Huy</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="comment  py-4 px-3">
            <p>
            "Absolutely amazing. Beautiful destination, meaningful, real-life experiences. 
            Great food and accommodations. Attentive and enthusiastic tour guides! 
            Let's schedule another trip with TourTravel soon."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3"> Hoang</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="comment py-4 px-3">
            <p>
            "Good service, friendly and cheerful tour guides, enthusiastic. 
            All tourists are satisfied with the company's services and tour guides. 
            Let's plan to continue traveling with the company soon."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3"> Thuy</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="comment py-4 px-3">
            <p>       
                "My family decided to have a change of scenery and go on a trip far away. 
                 The tour guides are enthusiastic, and the coordinators provide 
                support everywhere, anytime!! Thank you very much, TourTravel..."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3"> Ngoc</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        

    

                
    </Slider>
      
    
};
export default Comment;
