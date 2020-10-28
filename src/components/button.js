import React from 'react'
import styled from 'styled-components/macro'
import Link from 'gatsby-link'


const Button = ({children}) => {
    return (
        <Btn>
            <Link>{children}</Link>
        </Btn>
    )
}

export default Button

const Btn = styled.button`
    background: black;
    color: white;
    padding: 18px 22px;
    outline: none;
    border: none;
    display: block;
`;