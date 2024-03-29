import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    max-width: 2000px;
    padding-left: 0px;
    padding-right: 0px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

const NavBar = () => {
    return (
        <Container>
            <Nav>
                <Logo />
                <Links />
            </Nav>
        </Container>
    )
}

export default NavBar