import React from 'react';
import logo from '../assets/logo.svg';
import Counter from '../components/Counter';
import Learn from '../components/Learn';
import './CreateReactAppScreen.css';
import styled from 'styled-components';

const CreateReactAppScreen = () => {
    // TODO:
    //   - stop using className for the logo
    //   - do all formatting of the image within this file instead

    return (
        <Wrapper>
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <p>
            Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Learn />
        </Wrapper>
    );
}

export default CreateReactAppScreen;

const Wrapper = styled.div`
    text-align: center;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;
