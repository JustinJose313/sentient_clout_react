import { wrap } from 'gsap/gsap-core'
import React from 'react'
import styled from 'styled-components';
import img from './../../assets/images/service.jpeg';
const ServiceComponent = () => {
    return (
        <Wrap>
              
             <div className="wrap">
                <div className="left-section">
             <h1><span>Creative and ux</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum! Aliquid officiis tenetur, dignissimos vero ad saepe aut hic exercitationem id, dolorem, voluptate cum deleniti numquam quasi harum sed laborum!</p>
                </div>
                
                <div className="right-section" style={{background: `url(${img})`}}>
                </div>
            </div>  
        </Wrap>
                 
    )
}

export default ServiceComponent;


const Wrap = styled.div`
overflow: hidden;
   
.wrap{
    background:rgb(255, 255, 255);
    height:100vh;
display: flex;


.left-section{
    padding-top:100px;
    padding-left:100px;
    max-width: 50%;
    h1{
        word-wrap:unset;
    }
        p{
            font-size:16px;
            width:100ch;
            
        }
        width:100%;
        height:100%;
    }

    .right-section{
        width:50%;
    height: 100%;
    }

p{
     font-family:sans-serif;
     font-size:30px;
     

     color: #24372c;
    }
    h1 {
    color: white;
   
    mix-blend-mode: difference;
    
  }
  span {
    color: white;
    mix-blend-mode: difference;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 110px;
    line-height:1.5;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 700px) {
      font-size: 40px;
    }
  }
    

}
`
