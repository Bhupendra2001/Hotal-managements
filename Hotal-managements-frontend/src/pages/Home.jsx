import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import { Hotels } from '../components/Hotels'
const Container = styled.div``
export const Home = () => {
  return (
    <Container>
     <Navbar/>
     <Hotels/>
     <Footer/>
    </Container>
  )
}
