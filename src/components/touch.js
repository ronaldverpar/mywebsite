import React from 'react';
import styled from 'styled-components';

const TouchContainer = styled.div`
    width: 100%;
    margin: 300px 0;

    @media (max-width: 768px) {
        margin: 120px 0;
    }
    @media (max-width: 768px) {
        margin: 140px 0;
    }
`
const TouchSection = styled.div`
    width: 772px;
    height: 296px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 608px) {
        width: 90%;
    }
    @media (max-width: 1024px) {
        width: 70%;
    }

    a {
        width: 210px;
        height: 48px;
        background-color: #3F8EFC;
        color: white;
        border-radius: 20px;
        text-align: center;
        font-size: 16px;
        padding: 10px 5px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        margin-top: 34px;
    }

    a:hover {
        font-weight: 900;
        transform: translateY(-3px);
        transform: scale(1.05, 1.05);
    }
`

const Touch = () => {
    return ( 
        <TouchContainer>
            <TouchSection>
                <h2>Contactarme</h2>
                <p className="subinfo">Si tienes algún proyecto en mente envíame un mensaje y me contactare contigo para empezar a trabajar.</p>
                <a href="mailto:ronaldverpar@gmail.com">Vamos</a>
            </TouchSection>
        </TouchContainer>
     );
}
 
export default Touch;