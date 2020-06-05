import React from 'react';
import styled, { css } from 'styled-components';
import { FormingIdea } from './images';

const InterestContainer = styled.div`
    width: 100%;

    @media (max-width: 608px) {
        display: none;
    }

    @media (min-width: 1024px) {
        margin-top: 220px;
    }
`
const InterestSection = styled.div`
    width: 80%;
    margin: 0 150px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        margin: 0 10%;
    }
`

const InterestInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    margin-left: 5%;
`

const InterestImage = styled.div`
  width: 734px;
  height: 532px;

  @media (max-width: 1024px) {
    width: 334px;
  }
`

const Interest = () => {
    return ( 
        <InterestContainer>
            <InterestSection>
                <InterestImage>
                    <FormingIdea css={css`
                        width: 640px;

                        @media (max-width: 1024px) {
                            width: 334px;
                        }
                        @media (max-width: 768px) {
                            width: 204px;
                        }
                    `} />
                </InterestImage>
                <InterestInfo>
                    <h2>Mi Interés</h2>
                    <p className="subinfo" css={css`
                        margin-top: 80px;
                    `}>Mi interés se encuentra conectada a como mejorar la forma de trabajo de las personas y organizaciones creando aplicaciones intuitivas y de fácil adaptabilidad. Así mismo, la educación es otros de mis grandes interés ya que busco crear aplicaciones que ayuden a los estudiantes desde etapas muy tempranas haciendo uso de distintas herramientas y técnicas.</p>
                </InterestInfo>
            </InterestSection>
        </InterestContainer>
     );
}
 
export default Interest;