import React from 'react'
import { Container, Text } from 'rsuite'

const Footer = () => {
  return (
    <Container style={{backgroundColor:'#480365',height:'60px',color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:'16px',color:'white',fontWeight:'bolder'}}>Copyright - &copy;2024</Text> 
    </Container>
  )
}

export default Footer