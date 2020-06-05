import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider, css } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Footer from "./footer";
import { Moon, Sun } from "./images";

const ButtonTheme = styled.button`
  width: 54px;
  height: 54px;
  border: none;
  border-radius: 50%;
  /* box-shadow: 1px 4px 10px #E2E2E2; */
  bottom: 84px;
  right: 44px;
  z-index: 10;
  position: fixed;
`

const Layout = ({ children }) => {

  const [theme, setTheme] = useState('light')

  const toogleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Helmet>
          <title>Ronald Vergara</title>
          <meta name="description" content="I am front end developer." />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800;900&family=Roboto&display=swap" rel="stylesheet" />
        </Helmet>
        {/* <button onClick={toogleTheme}>Toggle theme</button> */}
        <ButtonTheme onClick={toogleTheme} className="newButtonStyle">
          { theme === 'light' ? (
            <Moon
            css={css`
              opacity: 50%;
              width: 24px;
            `}
          />
          ) : (
            <Sun
              css={css`
                width: 24px;
                color: white;
              `}
            />
          )}
        </ButtonTheme>
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
