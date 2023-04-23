import styled from 'styled-components'
import { useState } from 'react'
import { Email , Lock , Person} from '@mui/icons-material'



const Container = styled.div`
border : 2px solid red;
margin : auto;
width : 500px;
height : auto;
margin-top: 10%;
border-radius : 20px;
`
const Title = styled.h1`
padding-left : 100px;
padding-right : 100px;
padding-bottom : 10px;
text-align : center;
border-bottom : 2px solid black;
&:hover{
    color : blue;
}

`

const Form = styled.form`
display : flex;
flex-direction : column;

`

const Input = styled.input`

height : 20px;
width : 200px;
margin : auto;
border :none;
margin-bottom : 10px;
border-radius : 10px ;
color : teal;

outline: none;

&:hover{
  border : none;
}

`

const Label = styled.label`
color : blue;
font-size : 25px;
text-align : center;
&:hover{
    color : red;
}
`

const Button = styled.button`
color : green;
border : 2px solid black;
width : 220px;

margin: auto;
margin-top : 20px;
border-radius: 10px;
background-color : #fff;
font-size : 20px;
padding : 10px;

 &:hover{
    color : red;
 }
`
const Redirect = styled.p` 
text-align : center;
`
const Link = styled.a`
text-decoration: inherit;
`
const InputContainer = styled.div`

display : flex;
justify-content : center;
border : 2px solid gray;
height : 30px;
border-radius : 10px;
width : 200px;
margin : auto;
padding : 5px;
`



export const Register = () => {
    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [username , setUsername ] = useState('')
  

  return (
    <Container>
        <Title>Sign UP</Title>
        <Form>

        <Label> Name</Label>
        <InputContainer>
        <Input type ='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <Person style={{color : "blue", marginRight : "5px"}}/>
        </InputContainer>

        <Label> Email </Label>
        <InputContainer>
        <Input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <Email style={{color : "blue" , marginRight : "5px"}}/>
        </InputContainer>

        <Label>Password</Label>
        <InputContainer>
        <Input type ='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <Lock style={{color : "blue" , marginRight : "5px"}} />
        </InputContainer>


       <Button  > Register </Button>

        </Form>
        <Redirect>If Aleady have account please <Link href='/login'>Login</Link> </Redirect>
        
    </Container>
  )
}
