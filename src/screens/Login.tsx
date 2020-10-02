import React from 'react';
import styled from 'styled-components';

const LoginScreen = () => {

    return (
        <Wrapper>
            <p>
            This is the login page.
            </p>
        </Wrapper>
    );
}

export default LoginScreen;

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;
