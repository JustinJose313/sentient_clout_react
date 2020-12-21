import React from 'react';
import styled from 'styled-components';




const Hero = ({title, bg}) => {
    console.log(bg)
    const styles = {
        backgroundImage: `url(${bg})`
    }
    return (
        <div style={styles}>
            <Wrap>
                <div className="title">
                    <h1><span>{title}</span></h1>
                
                </div>
            </Wrap>
        </div>
    )
}



const Wrap = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default Hero;
