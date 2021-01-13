import styled from "styled-components";

const ButtonStyled = styled.button `
margin-top: 10px;
width:100px;
background-color:${props => props.create ? "#90eb908a" : "pink"};
border:2px solid black;

`
export {ButtonStyled}

