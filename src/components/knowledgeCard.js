import React from 'react';
import styled from 'styled-components';

const KnowledgeCardContainer = styled.div`
    width: 548px;
    height: 358px;
    position: relative;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px 54px;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        transform: translateY(-3px);
        transform: scale(1.05, 1.05);
    }
    
    @media (max-width: 1024px) {
        margin: 40px 0;
    }

    @media (max-width: 608px) {
        margin-top: 40px;
        margin: 20px 0;
        width: 100%;
        height: 328px;
        justify-content: flex-start;
    }
`
const KnowledgeCardImage = styled.div`
    margin-left: 5%;

    @media (max-width: 608px) {
        margin: 0;
        margin-top: 20px;
        text-align: center;
    }
`
const KnowledgeCardInfo = styled.div`
    width: 278px;
    height: 358px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    position: absolute;
    top: 0;
    right: 0;
    padding: 28px 40px;

    @media (max-width: 608px) {
        left: 0;
        top: calc(100% - 152px);
        width: 100%;
        height: 152px;
        padding: 20px 30px;
    }

    h3 {
        color: white;
        margin: 0;
        margin-top: 20px;
        font-size: 22px;
    }

    @media (max-width: 608px) {
        h3 {
            font-size: 16px;
            margin: 0;
        }
    }
`
const KnowledgeCardList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    @media (max-width: 608px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 8px;
    }
`
const KnowledgeCardListInfo = styled.p`
    font-size: 14px;
    color: white;
    margin: 8px 0;

    @media (max-width: 608px) {
        font-size: 10px;
        margin: 0;
    }
`

const KnowledgeCard = ({title, listitems, imagecard}) => {

    console.log(title);

    function getStyles(title) {
        switch (title) {
            case 'Coding':
              return { background: 'linear-gradient(145deg, rgba(255,166,183,1) 0%, rgba(30,42,210,1) 100%)' };
            case 'Tools':
              return { background: 'linear-gradient(145deg, rgba(82,229,231,1) 0%, rgba(19,12,183,1) 100%)' };
            case 'Frameworks & Libraries':
                return { background: 'linear-gradient(145deg, rgba(59,38,103,1) 0%, rgba(188,120,236,1) 100%)' };
            default:
              return { background: 'linear-gradient(145deg,rgba(151, 171, 255, 1) 0%, rgba(18, 53, 151, 1) 100%)' };
          };
    }
    
    return ( 
        <KnowledgeCardContainer style={getStyles(title)}>
            <KnowledgeCardImage>
                {imagecard}
            </KnowledgeCardImage>
            <KnowledgeCardInfo>
                <h3>{title}</h3>
                <KnowledgeCardList>
                    {listitems.map(item => (
                        <KnowledgeCardListInfo key={item.id}>{item.name}</KnowledgeCardListInfo>
                    ))}
                </KnowledgeCardList>
            </KnowledgeCardInfo>
        </KnowledgeCardContainer>
     );
}
 
export default KnowledgeCard;