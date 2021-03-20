import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import gold from '../img/gold.jpg';


const Styles = styled.div`
    .jumbo{
        background: url(${gold}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 400px;
        object-fit:cover;
        width:100%;
        position: relative;
        z-index: -2;
    }
    font-size: 30px;
    }
    .overlay{
        background-color: #000;
        opacity: 0.2;
        position: absolute;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1
    }
`
export const Jumbotron = () =>(
<Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay">
            
        </div>
    </Jumbo>
</Styles>

)