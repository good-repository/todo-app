import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FaCalendarCheck } from 'react-icons/fa';

export default props => (

    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#todos'>
            <FaCalendarCheck />{' '}
            ToDo App
        </Navbar.Brand>
        <Nav>
            <Nav.Link href='#todos'>Tasks</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
        </Nav>
    </Navbar>
)