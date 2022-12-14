import styled from "styled-components"

export const TransparentBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    z-index:1;
`

export const FormBase = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 40px;
    background-color: white;
    position: absolute;
    box-shadow: 0px 5px 15px #aaa;
    left: 25%;
    top: 25%;
    z-index:2;
`

export const InputLabel = styled.label`
    width: 300px;
    font-weight: bold;
    font-size: 1.1em;
`

export const InputBase = styled.input`
    font-size: 1.1em;
    width: 300px;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 50px;
`