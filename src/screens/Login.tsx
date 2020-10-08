import React, { useState } from 'react';
import styled from 'styled-components';

const LoginScreen = () => {

    // TODO: Instead of making requests here, we should:
    //   - Have a redux authentication feature
    //   - Have actions for the Login Request (ex: LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED)
    //   - When we click on the 'Login' button, this application should:
    //       - dispatch the LOGIN_REQUESTED action
    //       - In the LOGIN_REQUESTED reducer, we set the authentication 'isLoading' flag in the store to 'true'
    //       - In the LOGIN_REQUESTED epic, we should:
    //          - make a login HTTP request
    //          - If the request is successful, we dispatch a LOGIN_SUCCEEDED action
    //            with a payload of the user information
    //       - In the LOGIN_SUCCEEDED reducer, we should:
    //          - Populate the store with our user authentication data
    //          - set the authentication 'isLoading' flag in the store to 'false'
    // WRONG, but Dakota learnt. 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Wrapper>
            <p>Please Login</p>
            <Input
                autoCapitalize="none"
                placeholder="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <Input
                autoCapitalize="none"
                placeholder="password"
                value={password}
                type="password"
                onChange={event => setPassword(event.target.value)}
            />
            <Button>Login</Button>
        </Wrapper>
    );
}

export default LoginScreen;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

const Input = styled.input`
    font-size: 25px;
    margin: 5px;
`;

const Button = styled.button`
    margin: 5px;
    width: 100px;
    appearance: none;
    background: none;
    font-size: 20px;
    outline: none;
    border: 2px solid transparent;
    color: rgb(112, 76, 182);
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: 2px;
    transition: all 0.15s;
    &:hover, &:focus {
        border: 2px solid rgba(112, 76, 182, 0.4);
    }
    &:active, {
        background-color: rgba(112, 76, 182, 0.2);
    }
`;
