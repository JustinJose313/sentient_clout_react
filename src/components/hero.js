import React from 'react';
import styled from 'styled-components';




const Hero = ({title, bg}) => {
    console.log(bg)
    const styles = {
        backgroundImage: `url(${bg})`
    }
    return (
        <StyledHero style={styles}>
            <Wrap>
                <div className="title">
                    <h1><span>{title}</span></h1>
                
                </div>
            </Wrap>
        </StyledHero>
    )
}

const StyledHero = styled.div`
    margin-top:0px;
    height: 80vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;

    
    
`

const Wrap = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h1{
    color:white;
    mix-blend-mode:difference;

}
span{
    color:white;
    mix-blend-mode: difference;
    text-transform:uppercase;
    font-weight:900;
    font-size: 80px;
    font-family: "Montserrat",sans-serif;
    @media (max-width: 700px) {
        font-size: 40px;
    }

}
`

export default Hero;
