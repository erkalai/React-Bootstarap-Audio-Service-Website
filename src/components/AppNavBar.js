import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';





// Navigation Bar
const AppNavBar = () => {
  return (
    <section id='home' >
    
    <Navbar expand="lg" data-bs-theme='dark' className="position-sticky bg-body-tertiary d-block sticky-top "  >
        <Container>
        <section className='img'> <Image className='w-10 h-10 d-block' src={require('../assets/img/top.png')} fluid /></section>
            <Navbar.Brand href="#home" className='ms-3 fw-bold' >MUTHAMIZH SOUND WAVE
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className=' justify-content-end'>
            <Nav>
                <Nav.Link href="#home" >Home</Nav.Link>
                <Nav.Link href="#serviceCard" >Services</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#videos" >Videos</Nav.Link>
                <Nav.Link href="#contact_us">Contact Us</Nav.Link>
                <Nav.Link href="#about_us" >About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default AppNavBar;