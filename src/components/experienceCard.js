import React from "react"
import styled, { css } from "styled-components"
// import { DataReport } from "./images"

const ExperienceCardContainer = styled.div`
  width: 348px;
  height: 421px;
  border-radius: 20px;
  position: relative;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    transform: scale(1.05, 1.05);
  }

  @media (max-width: 608px) {
    width: 100%;
    margin: 14px 0;
  }
  @media (max-width: 768px) {
    width: 84%;
    margin: 14px 0;
  }
`
const ExperienceCardImage = styled.div`
  margin: 0 auto;
  margin-top: 76px;
  text-align: center;
`
const ExperienceCardInfo = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 188px;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 0 0 20px 20px;

  h4,
  p,
  a {
    color: white;
    margin: 0;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: 608px) {
    height: 206px;
  }
`
const ExperienceCardDataGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`
const ExperienceCardData = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  column-gap: 25px;
  margin: 2.5px 0;
`
const ExpSpanData = styled.span`
  font-size: 10px;
  color: #ffffff;
  opacity: 50%;
  text-align: right;
  text-transform: uppercase;
`

const ExperienceCard = ({
  backcolor,
  imagecard,
  title,
  date,
  technologies,
  company,
  website,
  websiteName,
}) => {

  function getstyleItem(company) {
    switch (company) {
      case 'EGEMSA':
        return { background: 'linear-gradient(145deg,rgba(151, 171, 255, 1) 0%, rgba(18, 53, 151, 1) 100%)' };
      case 'VERPAR S.C.R.L':
        return { background: 'linear-gradient(145deg, rgba(255,166,183,1) 0%, rgba(30,42,210,1) 100%)' };
      default:
        return { background: 'linear-gradient(145deg,rgba(151, 171, 255, 1) 0%, rgba(18, 53, 151, 1) 100%)' };
    };
  }
  return (
    <ExperienceCardContainer style={getstyleItem(company)}>
      <ExperienceCardImage>
        {imagecard}
      </ExperienceCardImage>
      <ExperienceCardInfo>
        <h4>{title}</h4>
        <span css={css`
          margin-top: 6px;
          color: white;
          text-transform: uppercase;
          font-size: 12px;
        `} className="dateExperience subinfo">{date}</span>
        <ExperienceCardDataGroup>
          <ExperienceCardData>
            <ExpSpanData>TECNOLOGIAS:</ExpSpanData>
            <p>{technologies}</p>
          </ExperienceCardData>
          <ExperienceCardData>
            <ExpSpanData>COMPAÑÍA:</ExpSpanData>
            <p>{company}</p>
          </ExperienceCardData>
          <ExperienceCardData>
            <ExpSpanData>WEBSITE:</ExpSpanData>
            <a
              css={css`
                font-size: 14px;
              `}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {websiteName}
            </a>
          </ExperienceCardData>
        </ExperienceCardDataGroup>
      </ExperienceCardInfo>
    </ExperienceCardContainer>
  )
}

export default ExperienceCard
