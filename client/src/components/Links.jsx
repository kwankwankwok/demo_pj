import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``


const Links = () => {
    return (
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                My first MERN Application
            </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="/horses/list" className="nav-link">
                            List Horses
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/horses/create" className="nav-link">
                            Create Horses
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links