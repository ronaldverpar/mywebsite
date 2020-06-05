import React from 'react';
import styled from "@emotion/styled"
import { MainImage } from './images';
import { css } from "@emotion/core"

const HeroContainer = styled.div`
    width: 100%;
`
const HeroSection = styled.div`
    width: 80%;
    margin: 0 150px;
    margin-top: 10%;
    display: flex;
    flex-direction: row;

    @media (max-width: 608px) {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        margin-top: 80px;
    }

    @media (max-width: 1024px) {
        margin: 0 auto;
        margin-top: 10%;
    }
`
const HeroInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    order: 1;
    
    @media (max-width: 608px) {
        order: 2;
        justify-content: center;
        text-align: center;
    }
`
const HeroImage = styled.div`
  width: 652px;
  height: 520px;
  order: 2;

  @media (max-width: 608px) {
    width: 100%;
    height: 330px;
    order: 1;
    text-align: center;
  }
`

const Hero = () => {
    return ( 
        <HeroContainer>
            <HeroSection>
                <HeroInfo>
                    <h1>Ronald Vergara Pareja</h1>
                    <h2 className="subtitle">Front End Developer</h2>
                    <p className="subinfo">Hola! Soy un front end developer con experiencia, trabajando con distintas tecnologías que permiten crear paginas web, así también, como concimientos en datamining. También tengo habilidades para el diseño de aplicaciones mobiles y paginas web.</p>
                </HeroInfo>
                <HeroImage>
                    <MainImage css={css`
                        width: 540px;

                        @media (max-width: 1024px) {
                            width: 320px;
                        }

                        @media (max-width: 768px) {
                            width: 256px;
                        }

                        @media (max-width: 608px) {
                            width: 226px;
                            height: 100%;
                        }
                    `} />
                </HeroImage>
            </HeroSection>
        </HeroContainer>
     );
}
 
export default Hero;