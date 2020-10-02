import React from 'react';
import styled from 'styled-components';

const Learn = () => (
    <span>
        <span>Learn </span>
        <StyledLink
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            React
          </StyledLink>
        <span>, </span>
        <StyledLink
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Redux
        </StyledLink>
        <span>, </span>
        <StyledLink
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Redux Toolkit
        </StyledLink>
          ,<span> and </span>
        <StyledLink
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            React Redux
        </StyledLink>
    </span>
);

export default Learn;

const StyledLink = styled.a`
    color: rgb(112, 76, 182);
`;