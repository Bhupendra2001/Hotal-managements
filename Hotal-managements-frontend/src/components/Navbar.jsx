import styled from "styled-components";
import {Search } from '@mui/icons-material'
import {mobile} from '../responsive'
const Container = styled.div`
display: flex;
justify-content : space-between;
margin : 0px;
padding : 0px 10px 0px 10px;
background-color : black;
color : #fff;
height : 70px;
align-items:center;
`;
const Left = styled.div`
display : flex;
background-color : #fff; 
margin-left : 10px;


`
const Middle = styled.div`
${mobile({fontSize : '12px'})}
`;
const Right = styled.div``;
const Input = styled.input`
border : none;
text-style : none;
${mobile({width : '80px'})}
`
const Link = styled.a`
margin : 10px;
text-decoration: none;

color : #fff;
${mobile({display : 'none'})}
`

export const Navbar = () => {
  return (
    <Container>
      <Left>
        <Input type='text' placeholder="Search hotel"/>
        <Search style={{color : "black"}}/>
      </Left>
      <Middle> Indians Top Hotels</Middle>
      <Right>
      <Link href="/login" >Login</Link>
      <Link href="/register">Register</Link>
      </Right>
    </Container>
  );
};
