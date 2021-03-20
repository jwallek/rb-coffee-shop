import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
.navbar{
    background-color:rgb(220,220,220);
    position: fixed;
    width: 100%;
    margin-bottom:5px;
    z-index: 100;
}
.navbar-brand, .navbar-nav .abc{
    color: #708090;
    text-decoration: none;
    transition: all 0.3s;
}
.navbar-nav{
    display: flex;
    margin-left:auto;
}
.navbar-brand:hover, .abc:hover{
    color: brown;
}

.abc{
    margin-left: 5px;
    width: 30px;
}

`;

export const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">RB Coffee<FontAwesomeIcon class="abc" icon={faCoffee}/></Navbar.Brand>
            
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m1-auto">
                <Nav.Item>
                    <Nav.Link>
                        <Link className="abc" to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link className="abc" to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link className="abc" to="/menu">Menu</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </Styles>
)


