import styled from 'styled-components';
import { Link } from "react-router-dom"



export const Input = styled.input`
height:3em;
border-radius:5px;
padding: 0 1em;

;
`

export const Form = styled.form`
display:flex;
flex-direction:column;
gap:30px;
width:80%;


`

export const SubmitCancelDiv = styled.div`
display:flex;

justify-content:  space-evenly;
width:100%;

`

export const CancelButton = styled.button`
background-color:black;
color:#343541;
font-size:2rem;
width:5em;
border-radius:5px;
border: none;
height:2em;

`

export const SubmitInput = styled.input`
background-color:black;
color:#343541;
font-size:2em;
width:5em;
border-radius:5px;
border: none;
height:2em;

`

export const StyledLink = styled(Link)`
color:black;
text-decoration:none;
font-size:2em;
padding-top:1em;
`

