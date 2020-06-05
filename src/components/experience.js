import React from "react"
import styled, { css } from "styled-components"
import ExperienceCard from "./experienceCard"
import { WebDevelop, DataReport } from "./images"

const ExperienceContainer = styled.div`
  width: 100%;
  margin-top: 240px;

  @media (max-width: 1024px) {
    margin-top: 120px;
  }
`
const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;

  @media (max-width: 768px) {
    margin: 0;
  }
`
const ExperienceCards = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 140px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: 608px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    margin-top: 60px;
  }
`

const Experience = () => {
  const imagecard = [
    <DataReport
      css={css`
        width: 288px;
        @media (max-width: 608px) {
          width: 80%;
        }
      `}
    />,
    <WebDevelop
      css={css`
        width: 288px;
        @media (max-width: 608px) {
          width: 80%;
        }
      `}
    />,
  ]

  return (
    <ExperienceContainer>
      <ExperienceSection>
        <h2 css={css`
          @media (max-width: 768px) {
            margin: 0 10%;
          }
        `}>Mi Experiencia</h2>
        <ExperienceCards>
          <ExperienceCard
            key="id1"
            backcolor={css`
              background-color: linear-gradient(
                145deg,
                rgba(255, 166, 183, 1) 0%,
                rgba(30, 42, 210, 1) 100%
              );
            `}
            imagecard={imagecard[0]}
            title="Full Stack Developer"
            date="JULIO 2016 - JUNIO 2017"
            technologies="HTML, CSS, JavaScript, ADO .NET, SQL Server"
            company="EGEMSA"
            websiteName="www.egemsa.com.pe"
            website="http://www.egemsa.com.pe"
          />
          <ExperienceCard
            key="id2"
            backcolor="colorexp2"
            imagecard={imagecard[1]}
            title="Front End Developer"
            date="AGOSTO 2019 - ENERO 2020"
            technologies="React (GatsbyJs), JavaScript, CSS"
            company="VERPAR S.C.R.L"
            websiteName="www.verpar.org.pe"
            website="http://www.verpar.org.pe"
          />
        </ExperienceCards>
      </ExperienceSection>
    </ExperienceContainer>
  )
}

export default Experience
