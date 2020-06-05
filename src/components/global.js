import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        transition: all 0.25s linear;
    }

    .newShadowStyle:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
    }

    .newButtonStyle {
        background-color: ${({ theme }) => theme.body};
        box-shadow: ${({ theme }) => theme.boxShadow};
    }

    h1,
    h2,
    h3 {
        margin: 0;
        line-height: 1.5;
        font-family: "Montserrat", sans-serif;
    }
    h1 {
        font-weight: 700;
        font-size: 42px;
    }
    h2 {
        font-weight: 700;
        font-size: 32px;
    }
    h3 {
        font-weight: 700;
        font-size: 22px;
    }
    h4 {
        font-weight: 700;
        font-size: 18px;
    }

    p {
        font-size: 20px;
    }
    .subinfo {
        opacity: 50%;
    }
    .subtitle {
        opacity: 50%;
    }
    .dateExperience {
        font-size: 12px;
        text-transform: uppercase;
    }
    .infoExperience {
        font-size: 14px;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 24px;
        }
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 26px;
        }
        .subtitle {
            font-size: 20px;
        }
        h2 {
            font-size: 22px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 608px) {
        h1 {
            font-size: 22px;
        }
        .subtitle {
            font-size: 16px;
        }
        p {
            font-size: 12px;
        }
    }
    @media (max-width: 568px) {
        h1 {
            font-size: 18px;
        }
        .subtitle {
            font-size: 14px;
        }
    }
    
    ${'' /* array of elements */}
    .colorexp1 {
        background-color: linear-gradient(145deg, rgba(151, 171, 255, 1) 0%, rgba(18, 53, 151, 1) 100%);
    }
    .colorexp2 {
        background-color: linear-gradient(145deg, rgba(255,166,183,1) 0%, rgba(30,42,210,1) 100%);
    }


`
