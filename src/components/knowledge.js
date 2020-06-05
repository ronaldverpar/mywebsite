import React from "react"
import styled, { css } from "styled-components"
import KnowledgeCard from "./knowledgeCard"
import { Coding, Tools, Frameworks } from "./images"

const KnowledgeContainer = styled.div`
  width: 100%;
  margin-top: 240px;

  @media (max-width: 608px) {
    margin-top: 160px;
  }
`
const KnowledgeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
`
const KnowledgeCards = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 608px) {
    flex-direction: column;
  }
`

const Knowledge = () => {
  const imagecard = [
    <Coding
      css={css`
        width: 208px;

        @media (max-width: 608px) {
          width: 190px;
        }
      `}
    />,
    <Tools
      css={css`
        width: 246px;

        @media (max-width: 608px) {
          width: 182px;
        }
      `}
    />,
    <Frameworks
      css={css`
        width: 232px;
        @media (max-width: 608px) {
          width: 184px;
        }
      `}
    />,
  ]

  const listcoding = [{id: "1", name: "HTML5"}, {id: "2", name: "CSS3"}, {id: "3", name: "JavaScript"}, {id: "4", name: "C#"}, {id: "5", name: "SwiftUI"}, {id: "6", name: "SQL"}]
  const listtools = [{id: "1", name: "VS Code"}, {id: "2", name: "Visual Studio"}, {id: "3", name: "Github"}, {id: "4", name: "Figma"}, {id: "5", name: "Adobe XD"}, {id: "6", name: "InvisionStudio"}, {id: "7", name: "SQL Server"}]
  const listframework = [{id: "1", name: "Bootstrap"}, {id: "2", name: "React"}, {id: "3", name: "React Native"}, {id: "4", name: "GatsbyJS"}, {id: "5", name: "Next.js"}, {id: "6", name: "Git"}]

  return (
    <KnowledgeContainer>
      <KnowledgeSection>
        <h2>Mis Conocimientos</h2>
        <KnowledgeCards>
          <KnowledgeCard title="Coding" listitems={listcoding} imagecard={imagecard[0]} />
          <KnowledgeCard title="Tools" listitems={listtools} imagecard={imagecard[1]} />
          <KnowledgeCard title="Frameworks & Libraries" listitems={listframework} imagecard={imagecard[2]} />
        </KnowledgeCards>
      </KnowledgeSection>
    </KnowledgeContainer>
  )
}

export default Knowledge
