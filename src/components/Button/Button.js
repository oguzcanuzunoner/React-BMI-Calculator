import React from "react";
import styled from "styled-components";


const ButtonStyle = styled.button`background-color: #121212; 
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;`;

function Button({ click, buttonName }) {
  return <ButtonStyle onClick={click}>{buttonName}</ButtonStyle>;
}

export default Button;
