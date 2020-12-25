import { wrap } from 'gsap/gsap-core'
import React from 'react'
import styled from 'styled-components';
import img from './../../assets/images/service.jpeg';
const ServiceComponent = () => {
    return (
        <Wrap>
              
            <div className="grid">
                <div className="title">
                    <h1>Creative and ux</h1>
                </div>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum! Aliquid officiis tenetur, dignissimos vero ad saepe aut hic exercitationem id, dolorem, voluptate cum deleniti numquam quasi harum sed laborum!</p>
                </div>
                <div className="img-section" style={{background: `url(${img})`}}>
                </div>
            </div>  
        </Wrap>
                 
    )
}

export default ServiceComponent;


const Wrap = styled.div`


   .grid{
       display:grid;
       grid-template-columns:8% 40% 15% auto;
       grid-template-rows:90px auto auto 95px;

       .title{
           grid-column:2/5;
           grid-row:2;
           /* z-index:1; */
           h1 {
             mix-blend-mode: difference;
               color: white;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 110px;
                line-height:1.5;
                font-family: "Montserrat", sans-serif;
                @media (max-width: 700px) {
                    font-size: 40px;
                }
             span {
            }
          }
       }

       .paragraph{
           grid-column:2/3;
           grid-row:3;
           z-index:1;   
           
            p{
            font-family:sans-serif;
            font-size:30px;
            color: #24372c;
            padding:20px 30px 20px 0;
            }
       }

       .img-section{
           grid-column:3/6;
           grid-row:1/6;   
           width:100vw;   
       }


   
  
    

}
`
