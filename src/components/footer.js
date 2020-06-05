import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const FooterSection = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    box-shadow: 0 -3px 50px rgba(113, 109, 109, 0.16);
`

const Footer = () => {
    return ( 
        <FooterSection>
            <p css={css`
                text-align: center;
                margin: 0 auto;
                font-size: 16px;
                opacity: 50%;
            `}>Made by Ronald Vergara</p>
        </FooterSection>
     );
}
 
export default Footer;